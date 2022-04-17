
import './Cart.css'
import { useContext } from "react"
import { useNavigate  } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, clearCart, removeItem, getQuantity, getTotal  } = useContext(CartContext)
    const navigate = useNavigate ();

    if(getQuantity() === 0) {
        return (
            <div className='noitems'>
                <h1 >No hay items en el carrito</h1>
                <button className='btnEmpty' onClick={() => { navigate('/'); }}>Ir a Tienda</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Carrito</h1>
            <section className="cart-content">
                {cart.map(prod => <CartItem key={prod.id} {...prod}  onRemove={removeItem} />)}
            </section>
            <h2 className='total__import'>Total: $ {getTotal()}</h2>
            <div className='buttonbar'>
                <button className='btnEmpty' onClick={clearCart}>Cancelar Compra</button>
                <button className='btnEmpty' onClick={() => { navigate('/'); }}>Seguir Comprando</button>
            </div>
        </div>
    )
}

export default Cart