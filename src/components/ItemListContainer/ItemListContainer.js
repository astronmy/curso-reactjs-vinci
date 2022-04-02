
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const handler = (e) => {
        if(e.key == "Enter"){
            setSearch(e.target.value)
            fetchProducts()
        }
    };

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
            <div>
                <h4 className='title'>{greetings}</h4>
                <div className='searchbox'>
                    <input className='searchbox__input' placeholder='Buscar...' type="text" 
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => handler(e)}></input>
                    <a className='searchbox__button' onClick={fetchProducts}><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>

            </div>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer