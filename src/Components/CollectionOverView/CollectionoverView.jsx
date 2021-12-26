import React from 'react'
import { connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
const CollectionoverView = ({ collections }) => {
  console.log('this is collection', collections)
  return (
    <div className='collectionOverview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
})
export default connect(mapStateToProps)(CollectionoverView)
