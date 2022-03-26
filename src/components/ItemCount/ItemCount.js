import './ItemCount.css'
import { useEffect, useState } from 'react'

const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(stock > count){
            setCount(count+1)
        }
    }
    const decrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

    return (
        <div>
            <button onClick={decrement}> - </button>
            <p className='item-counter'>{count}</p>
            <button onClick={increment}> + </button>
            <button onClick={() => onAdd(count)}> Add Items </button>
        </div>
    )
}
export default ItemCount