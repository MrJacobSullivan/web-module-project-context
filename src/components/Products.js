import React from 'react'

// Components
import Product from './Product'

import { useProductContext } from '../hooks/useProductContext'

const Products = () => {
  const { products } = useProductContext()

  return (
    <div className='products-container'>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  )
}

export default Products
