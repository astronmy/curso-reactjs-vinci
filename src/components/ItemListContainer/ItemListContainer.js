
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import SearchBox from '../SearchBox/SearchBox'
import { useEffect, useState } from 'react'

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = (search = "") => {
        setLoading(true);
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
            .then(response => {
                return response.json()
            })
            .then(result => {
                setProducts(result.results)
            }).finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div className="container">
            <h4 className='title'>{greetings}</h4>
            <SearchBox onSearch={getProducts} ></SearchBox>
            {
                loading ? <h1 className='loading'>Cargando ...</h1> : <ItemList products={products}></ItemList>
            }
        </div>
    )
}

export default ItemListContainer