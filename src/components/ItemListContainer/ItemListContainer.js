
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../asyncmock'

const ItemListContainer = ({ greetings }) => {
    const[products, setProducts] = useState()
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


    if (loading) {
        return <h1>Cargando...</h1>
    }


    return (
        <div className="container">
            <h4 className='title'>{greetings}</h4>
            {
                loading ? <h1 className='loading'>Cargando ...</h1> : products.length ?  <ItemList products={products}></ItemList> :  <h1>No se encontraron productos!</h1>
            }
        </div>
    )
}

export default ItemListContainer