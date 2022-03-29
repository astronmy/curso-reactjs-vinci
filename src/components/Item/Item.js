import './Item.css'

const Item = ({ image, title, price }) => {

    return (
        <div class="card">
            <img src={image} alt={title} />
            <div class="card__container">
                <h4 className="card__title">{title}</h4>
                <p className="card__price">{price}</p>
            </div>
        </div>
    )

}

export default Item