import React from 'react'

import { useCartContext } from '../hooks/useCartContext'

const Product = ({ title, image, price, id }) => {
  const { addToCart } = useCartContext()

  const handleClick = () => addToCart(id)

  return (
    <div className='product'>
      <img src={image} alt={`${title} book`} />

      <h1 className='title'>{title}</h1>

      <p className='price'>${price}</p>

      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default Product
