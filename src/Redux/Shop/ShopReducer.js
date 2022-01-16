import shopActionType from './Shop.types'

const initialState = {
  collections: null,
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}
export default shopReducer
