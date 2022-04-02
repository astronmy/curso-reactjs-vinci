import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import Product from "../../models/Product"
import "./ItemDetail.css"

const ItemDetail = () => {
  const params = useParams()
  const [data, setData] = useState({})
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const onAdd = (count) =>{
    setQuantity(count);
    console.log("agrega al carrito");
  }

  useEffect(() => {
    setProduct(params.productId);
  }, []);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${product}`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        setData(new Product(result.id, result.title, result.pictures, result.price, result.thumbnail, result.attributes, result.sold_quantity))
        console.log(result)
      })
  }, [product]);

  return (
    <article className="product">
      <picture className="product__image">
        <img src={data.main_image} alt="product image" />
      </picture>
      <div className="product__info">
        <h1 className="product__title">{data.title}</h1>
        <h3 className="product__price">{data.price}</h3>
        <div className="attributes">
          <h3>Características:</h3>
          {data.attributes && data.attributes.slice(0, 10).map(item => (item.value_name) && <div className="product__attributes" key={item.name}><span>{item.name}</span> <span>{item.value_name}</span></div>)}
          <ItemCount stock={data.sold_quantity} onAdd={onAdd}/>
          <NavLink to={"/"}>Volver</NavLink>
        </div>
      </div>
      <div className="product__option">

      </div>
    </article>
  )
}

export default ItemDetail;