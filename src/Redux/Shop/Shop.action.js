import shopActionType from './Shop.types'

export const updateCollections = (collectionsMap) => ({
  type: shopActionType.UPDATE_COLLECTIONS,
  payload: collectionsMap,
})
