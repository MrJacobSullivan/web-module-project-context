import React from 'react'

import ProductContextProvider from './ProductContext'
import CartContextProvider from './CartContext'

const ContextProviders = ({ children }) => {
  return (
    <ProductContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </ProductContextProvider>
  )
}

export default ContextProviders
