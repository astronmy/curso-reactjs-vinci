
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncmock'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        getProducts(search).then(items => {
            setProducts(items)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProducts([])
        })          
    }, [search])

    return (
        <div className="container">
            {
                loading ? 
                <h1>Cargando...</h1> : 

                products.length ? 
                    <ItemList products={products}></ItemList>:
                    <h1>No se encontraron productos!</h1>
            }
        </div>
    )
}

export default ItemListContainer