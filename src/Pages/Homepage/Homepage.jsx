import React from 'react'
import { connect } from 'react-redux'
import Banner from '../../Components/Banner/Banner'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Directory from '../../Directory/Directory'
import { selectCollectionID } from '../../Redux/Shop/ShopSelector'
const Homepage = ({ collection }) => {
  return (
    <div className='Homepage'>
      <Directory />
      <Banner />
      <FeaturedProducts />
      {/* <h1>{collection.title}</h1> */}
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionID(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(Homepage)
