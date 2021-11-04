import { ACTIONS } from '../actions/cartActions'

const initialState = {}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return null

    case ACTIONS.REMOVE_FROM_CART:
      return null

    case ACTIONS.EMPTY_CART:
      return null

    default:
      return state
  }
}

export { initialState, reducer }
