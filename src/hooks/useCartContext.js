import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const useCartContext = () => {
  const context = useContext(CartContext)

  return { ...context }
}

export { useCartContext }
