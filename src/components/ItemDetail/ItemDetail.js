import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncmock"
import "./ItemDetail.css"

const ItemDetail = () => {
  const params = useParams()
  const [data, setData] = useState({})
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProduct(params.productId);
  }, []);

  useEffect(() => {
    getProductById(product).then(response => {
      console.log(response)
      setData(response);
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })

    return (() => {
      setData()
    })       
  }, [product]);

  return (
    <section className="product">
      {
        loading ?
          <h1>Cargando...</h1> :
          data &&
          <>
            <picture className="product__image">
              <img src={data.img} alt="product image" />
            </picture>
            <div className="product__info">
              <h1 className="product__title">{data.name}</h1>
              <p className="product__description">
                {data.description}
              </p>
              <h3 className="product__price">{data.price}</h3>
            </div>
            <div className="product__option">
            </div>
          </>
      }
    </section>
  )
}

export default ItemDetail;