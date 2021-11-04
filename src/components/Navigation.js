import React from 'react'
import { NavLink } from 'react-router-dom'

import { useCartContext } from '../hooks/useCartContext'

const Navigation = () => {
  const { cart } = useCartContext()

  return (
    <div className='navigation'>
      <NavLink to='/'>Products</NavLink>
      <NavLink to='/cart'>
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  )
}

export default Navigation
