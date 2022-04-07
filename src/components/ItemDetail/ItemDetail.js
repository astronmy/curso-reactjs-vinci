import { useEffect, useState, useContext  } from "react"
import { useParams } from "react-router-dom"
import { NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from "../ItemCount/ItemCount"
import Product from "../../models/Product"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
  const params = useParams()
  const [data, setData] = useState({})
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (count) => {
      setQuantity(count)
      addItem({ id, name, price}, count)
  }
      
  useEffect(() => {
    setProduct(params.productId);
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/items/${product}`)
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
          <ItemCount stock={data.sold_quantity} onAdd={handleOnAdd}/>
          <NavLink to={"/"}>Volver</NavLink>
        </div>
      </div>
      <div className="product__option">

      </div>
    </article>
  )
}

export default ItemDetail;