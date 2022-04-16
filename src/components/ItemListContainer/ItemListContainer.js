
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import { getProducts } from '../../asyncmock'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProducts(categoryId).then(items => {
            setProducts(items)
        }).catch(err  => {
            console.log(err)
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