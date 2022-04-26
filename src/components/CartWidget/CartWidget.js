import './CartWidget.css'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    return(
        <Link to={'/'} className="CartWidget">
            <i className="fa-solid fa-cart-shopping"></i>&nbsp;
        </Link>
    );
}

export default CartWidget