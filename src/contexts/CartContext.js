import React, { useReducer, createContext } from 'react'
import { reducer, initialState } from '../lib/reducers/cartReducer'
import { functions } from '../lib/actions/cartActions'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState)

  const addToCart = (item) => dispatch(functions.addToCart(item))
  const removeFromCart = (item) => dispatch(functions.removeFromCart(item))
  const emptyCart = () => dispatch(functions.emptyCart())

  return (
    <CartContext.Provider values={{ cart, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
export default CartContextProvider
