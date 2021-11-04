import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

import { useCartContext } from './hooks/useProductContext'

function App() {
  const { products, cart, setCart } = useCartContext()

  const addItem = (item) => {
    // add the given item to the cart
  }

  return (
    <div className='App'>
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path='/'>
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path='/cart'>
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  )
}

export default App
