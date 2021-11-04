import React, { useState, createContext } from 'react'
import data from '../data'

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products, addProduct] = useState(data)

  return (
    <ProductContext.Provider values={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext }
export default ProductContextProvider
