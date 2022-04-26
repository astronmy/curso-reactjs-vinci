import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ img, name, price, id }) => {

    return (
        <article className="card">
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h4 className="card__title">{name}</h4>
            <div className="card__container">
                <p className="card__price">{price}</p>
            </div>
            <footer>
                <Link to={`/product/${id}`} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    )

}

export default Item