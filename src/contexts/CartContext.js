import React, { useReducer, createContext } from 'react'
import logger from 'use-reducer-logger'
import { reducer, initialState } from '../lib/reducers/cartReducer'
import { functions } from '../lib/actions/cartActions'

import { useProductContext } from '../hooks/useProductContext'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(logger(reducer), initialState)

  const productContext = useProductContext()

  const addToCart = (id) => {
    const product = productContext.products.find((product) => product.id === id)
    dispatch(functions.addToCart(product))
    productContext.removeItem(id)
  }

  const removeFromCart = (id) => {
    const product = cart.find((product) => product.id === id)
    productContext.addItem(product)
    dispatch(functions.removeFromCart(id))
  }

  const emptyCart = () => {
    cart.forEach((product) => {
      productContext.addItem(product)
    })
    dispatch(functions.emptyCart())
  }

  const cartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price
      }, 0)
      .toFixed(2)
  }

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
