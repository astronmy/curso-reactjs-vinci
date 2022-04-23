
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firebaseStorage } from '../../services/firebase'
import { getDocs, collection, query, where, limit } from 'firebase/firestore' 

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(firebaseStorage, 'products'), where('category', '==', categoryId), limit(10))
            : collection(firebaseStorage, 'products')

        getDocs(collectionRef).then(querySnapshot => {
            console.log(querySnapshot.size)
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })
    }, [categoryId])


    return (
        <div className="container">
            <h4 className='title'>{greetings}</h4>
            {
                loading ? <h1 className='loading'>Cargando ...</h1> : <ItemList products={products}></ItemList>
            }
        </div>
    )
}

export default ItemListContainer