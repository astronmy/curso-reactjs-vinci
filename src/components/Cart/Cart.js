
import './Cart.css'
import { useContext } from "react"
import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart, removeItem } = useContext(CartContext)
    

    return (
        <div>
            <h1>Carrito</h1>
            <section className="cart-content">
                {cart.map(prod => <CartItem key={prod.id} {...prod}  onRemove={removeItem} />)}
            </section>
            <button className='btnEmpty' onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart