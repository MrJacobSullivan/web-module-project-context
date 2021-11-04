const ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
}

const functions = {
  addItem: (item) => ({ type: ACTIONS.ADD_ITEM, payload: item }),
  removeItem: (item) => ({ type: ACTIONS.REMOVE_ITEM, payload: item }),
}

export { ACTIONS, functions }
