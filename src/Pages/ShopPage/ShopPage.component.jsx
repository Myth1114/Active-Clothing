import React from 'react'
import { Route } from 'react-router'
import CollectionoverView from '../../Components/CollectionOverView/CollectionoverView'
import CollectionPage from '../Collection/Collection'

import {
  ConvertCollectionsSnapshotToMap,
  firestore,
} from '../../Components/Firebase/firebase.utils'
import { updateCollections } from '../../Redux/Shop/Shop.action'
import { connect } from 'react-redux'
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then((snapshot) => {
      const collectionMap = ConvertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap)
    })
  }
  render() {
    const { match } = this.props
    return (
      <div className='collection'>
        <Route exact path={`${match.path}`} component={CollectionoverView} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
