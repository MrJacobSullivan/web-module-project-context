import React, { useState, createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider values={{ cart, setCart }}>{children}</CartContext.Provider>
  )
}

export { CartContext }
export default CartContextProvider
