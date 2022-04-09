import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='products'>
            {products.map(product => <Item key={product.id} img={product.img} name={product.name} price={product.price} id={product.id} ></Item>)}
        </div>
    )
}

export default ItemList