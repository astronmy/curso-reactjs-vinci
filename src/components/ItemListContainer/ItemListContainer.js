
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    /*useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=notebook')
            .then(response => {
                return response.json()
            })
            .then(result => {
                setProducts(result.results)
            })
    }, [])*/

    const fetchProducts = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
            .then(response => {
                return response.json()
            })
            .then(result => {
                setProducts(result.results)
            })
    }

    return (
        <div className="container">
            <h1>{greetings}</h1>
            <div>
                <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={fetchProducts}> Buscar </button>
            </div>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer