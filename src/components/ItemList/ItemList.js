import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='products'>
            {products.map(product => <Item key={product.id} image={product.image} name={product.name} price={product.price} ></Item>)}
        </div>
    )
}

export default ItemList