import React from 'react'
import { connect } from 'react-redux'
import { selectCollections } from '../../Redux/Shop/ShopSelector'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
const CollectionoverView = ({ collections }) => {
  console.log(collections)
  return (
    <div className='collectionOverview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
})
export default connect(mapStateToProps)(CollectionoverView)
