import { NavLink } from 'react-router-dom'
import './Item.css'

const Item = ({ img, name, price, id }) => {

    return (
        <div className="card">
            <img src={img} alt={name} />
            <div className="card__container">
                <NavLink to={`product/${id}`}>
                    <h4 className="card__title">{`${name.substring(0,30)}...`}</h4>
                </NavLink>
                <p className="card__price">{price}</p>
                
            </div>
        </div>
    )

}

export default Item