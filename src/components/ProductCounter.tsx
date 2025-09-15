import plus from '../assets/icon-plus.svg'
import minus from '../assets/icon-minus.svg'
import { useState } from 'react'

const ProductCounter = () => {
  const [count, setCount] = useState(0)
  
  const increase = () => {
    setCount(prev => prev + 1)
  }
  const decrease = () => {
    if(count > 0)
        setCount(prev => prev - 1)
  }

  return (
    <div className='productCounter'>
        <button onClick={decrease}>
            <img src={minus}/>
        </button>
        <span>{count}</span>
        <button onClick={increase}>
            <img src={plus}/>
        </button>
    </div>
  )
}

export default ProductCounter