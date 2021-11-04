import React, { useState, createContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => setCart([...cart, item])

  return (
    <CartContext.Provider values={{ cart, addToCart }}>{children}</CartContext.Provider>
  )
}

export { CartContext }
export default CartContextProvider
