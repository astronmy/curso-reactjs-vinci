import { useEffect, useState } from "react"
import "./ItemDetail.css"


const ItemDetail = ({product}) => {
  const [product, setProduct] = useState(null)

  useEffect(() => { 
    fetch(`https://api.mercadolibre.com/items/${product_id}`)
      .then(response => {
        console.log(response.json())
        return response.json()
      })
      .then(result => {
        console.log(result)
        setProduct(result.results)
      })
  }, [product]);
}

export default ItemDetail;