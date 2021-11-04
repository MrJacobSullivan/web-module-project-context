import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

const useProductContext = () => {
  const context = useContext(ProductContext)

  return { ...context }
}

export { useProductContext }
