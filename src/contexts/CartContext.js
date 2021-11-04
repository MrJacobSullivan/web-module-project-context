import React, { createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>
}

export { CartContext }
export default CartContextProvider
