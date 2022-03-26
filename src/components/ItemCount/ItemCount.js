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
            <button className='btn-discount' onClick={decrement}> - </button>
            <p className='item-counter'>{count}</p>
            <button className='btn-increment' onClick={increment}> + </button>
            <button className={`btn-add ${(count < 1 ? 'disabled': '')}`} onClick={() => onAdd(count)}> Add Items </button>
        </div>
    )
}
export default ItemCount