import React, { useState, createContext } from 'react'
import data from './data'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider values={{ products, cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartContextProvider
