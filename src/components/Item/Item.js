import './Item.css'

const Item = ({ image, name, price }) => {

    return (
        <div class="card">
            <img src={image} alt={name} />
            <div class="card__container">
                <h4><strong>{name}</strong></h4>
                <p className='card__price'>{price}</p>
            </div>
        </div>
    )

}

export default Item