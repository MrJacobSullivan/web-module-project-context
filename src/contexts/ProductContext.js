import React, { useReducer, createContext } from 'react'
import logger from 'use-reducer-logger'
import { reducer, initialState } from '../lib/reducers/productsReducer'
import { functions } from '../lib/actions/productsActions'

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(logger(reducer), initialState)

  const addItem = (item) => dispatch(functions.addItem(item))
  const removeItem = (id) => dispatch(functions.removeItem(id))

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext }
export default ProductContextProvider
