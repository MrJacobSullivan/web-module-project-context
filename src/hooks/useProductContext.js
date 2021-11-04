import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const useProductContext = () => useContext(ProductContext)

export { useProductContext }
