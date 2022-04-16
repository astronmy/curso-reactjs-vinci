import { Link } from 'react-router-dom'
import './CartItem.css'

const CartItem = ({ id, name, img, price, quantity, onRemove}) => {

    return (
        <div className="carrito__item">
            <h4 className="carrito__item__title">{name}</h4>
            <h4 className="carrito__item__title">{quantity}</h4>
            <button onClick={() => onRemove(id)}>Quitar</button>
        </div>
    )

}

export default CartItem