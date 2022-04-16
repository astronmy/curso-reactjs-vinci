import { useState, useContext } from 'react' 
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
// import { CartContext } from '../../App'
import CartContext from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
  const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        setQuantity(count)
        // setCart([...cart, {id, name, price, count}])
        addItem({ id, name, price}, count)
    }

  return (
    <article className="product">
      <picture className="product__image">
        <img src={img} alt="product image" /> 
      </picture>
      <div className="product__info">
        <h1 className="product__title">{name}</h1>
        <h3 className="product__price">{price}</h3>
      </div>
      <div className="product__option">

      </div>
    </article>
  )
}

export default ItemDetail;