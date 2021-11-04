import React, { useReducer, createContext } from 'react'
import { reducer, initialState } from '../lib/reducers/productsReducer'
import { functions } from '../lib/actions/productsActions'

const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState)

  const addItem = (item) => dispatch(functions.addItem(item))
  const removeItem = (item) => dispatch(functions.addItem(item))

  return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext }
export default ProductContextProvider
