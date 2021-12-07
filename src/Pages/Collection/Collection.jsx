import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { selectCollectionID } from '../../Redux/Shop/ShopSelector'

const CollectionPage = ({ collection }) => {
  console.log('this is collection', collection)
  return (
    <div className='CollectionPage'>
      <h2>collection page</h2>
      <h1>{collection.title}</h1>
      <div className=''>
        {collection.items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionID(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(CollectionPage)
