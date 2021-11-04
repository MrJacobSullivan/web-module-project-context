import React from 'react'
import { useCartContext } from '../hooks/useCartContext'

const Item = ({ image, title, price, id }) => {
  const { removeFromCart } = useCartContext()

  const handleClick = () => removeFromCart(id)

  return (
    <div className='shopping-cart_item'>
      <img src={image} alt={`${title} book`} />

      <div>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <button onClick={handleClick}>Remove from cart</button>
      </div>
    </div>
  )
}

export default Item
