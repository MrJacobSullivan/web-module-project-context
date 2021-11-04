import React, { useReducer, createContext } from 'react'
import { reducer, initialState } from '../lib/reducers/cartReducer'
import { functions } from '../lib/actions/cartActions'

import { useProductContext } from '../hooks/useProductContext'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState)

  const productContext = useProductContext()
  const { products } = productContext

  const addToCart = (id) => dispatch(functions.addToCart(products[id]))
  const removeFromCart = (id) => dispatch(functions.removeFromCart(id))
  const emptyCart = () => dispatch(functions.emptyCart())

  const cartTotal = cart
    .reduce((acc, value) => {
      return acc + value.price
    }, 0)
    .toFixed(2)

  return (
    <CartContext.Provider
      value={{ cart, cartTotal, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartContextProvider
