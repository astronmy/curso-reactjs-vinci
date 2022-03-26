
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
import { useEffect, useState } from 'react'

const ItemListContainer = ({greetings}) =>{
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then( response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className="container">
            <h1>{greetings}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer