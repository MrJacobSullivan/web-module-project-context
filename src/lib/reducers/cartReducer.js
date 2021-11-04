import { ACTIONS } from '../actions/cartActions'

const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return [...state, action.payload]

    case ACTIONS.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload)

    case ACTIONS.EMPTY_CART:
      return initialState

    default:
      return state
  }
}

export { initialState, reducer }
