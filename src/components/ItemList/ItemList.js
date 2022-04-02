import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='products'>
            {products.map(product => <Item key={product.id} image={product.thumbnail} title={product.title} price={product.price} id={product.id} ></Item>)}
        </div>
    )
}

export default ItemList