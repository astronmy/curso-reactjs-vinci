import './Item.css'

const Item = ({ image, title, price }) => {

    return (
        <div className="card">
            <img src={image} alt={title} />
            <div className="card__container">
                <h4 className="card__title">{`${title.substring(0,30)}...`}</h4>
                <p className="card__price">{price}</p>
            </div>
        </div>
    )

}

export default Item