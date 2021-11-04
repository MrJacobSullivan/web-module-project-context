import { ACTIONS } from '../actions/productsActions'
import data from '../../data'

const initialState = data

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [...state, action.payload]

    case ACTIONS.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload)

    default:
      return state
  }
}

export { initialState, reducer }
