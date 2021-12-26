import React from 'react'
import { Route } from 'react-router'
// import CollectionoverView from '../../Components/CollectionOverView/CollectionoverView'
import CollectionPage from '../Collection/Collection'

const ShopPage = ({ match }) => {
  return (
    <div className='collection'>
      {/* <Route exact path={`${match.path}`} component={CollectionoverView} /> */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
