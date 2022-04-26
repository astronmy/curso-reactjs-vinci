import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0)

  const handleOnAdd = (count) => {
    setQuantity(count);
    console.log("Agrego  elementos al carriuto");
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
      <footer>
        {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <Link to='/' className='carrito'>Agregados {quantity}</Link>}
      </footer>
    </article>
  )
}

export default ItemDetail;