import React, { useReducer, createContext } from 'react'
import { reducer, initialState } from '../lib/reducers/cartReducer'
import { functions } from '../lib/actions/cartActions'

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState)

  const addItem = (item) => dispatch(functions.addItem(item))
  const removeItem = (item) => dispatch(functions.addItem(item))

  return (
    <ProductContext.Provider values={{ products, addItem, removeItem }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext }
export default ProductContextProvider
