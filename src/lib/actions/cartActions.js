const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  EMPTY_CART: 'EMPTY_CART',
}

const functions = {
  addToCart: (item) => ({ type: ACTIONS.ADD_TO_CART, payload: item }),
  removeFromCart: (item) => ({ type: ACTIONS.REMOVE_FROM_CART, payload: item }),
  emptyCart: () => ({ type: ACTIONS.EMPTY_CART }),
}

export { ACTIONS, functions }
