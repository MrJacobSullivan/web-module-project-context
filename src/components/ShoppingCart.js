import React from 'react'

// Components
import Item from './ShoppingCartItem'

import { useCartContext } from '../hooks/useCartContext'

const ShoppingCart = () => {
  const { cart, cartTotal, emptyCart } = useCartContext()

  return (
    <div className='shopping-cart'>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <div className='shopping-cart__checkout'>
        <p>Total: ${cartTotal()}</p>
        <button onClick={emptyCart}>Empty Cart</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart
