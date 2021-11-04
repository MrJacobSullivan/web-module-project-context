import React, { useState, createContext } from 'react'
import data from '../data'

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products] = useState(data)

  return (
    <ProductContext.Provider values={{ products }}>{children}</ProductContext.Provider>
  )
}

export { ProductContext }
export default ProductContextProvider
