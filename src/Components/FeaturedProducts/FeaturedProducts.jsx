import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../Redux/Shop/ShopSelector'
const FeaturedProducts = ({ featured }) => {
  // console.log(featured[0], 'featured')

  // const ITEMS = featured[0].items.map((el) => {
  //   return el.name
  // })
  // console.log(ITEMS)
  // const items = featured.map((el) => {
  //   return el.items[0]
  // })
  // console.log(items, 'items')

  // const name = items.map((el) => {
  //   return el
  // })
  // console.log(name, 'name')

  // const single = name.map((el) => {
  //   return el.name
  // })
  // console.log(single, 'singlee')

  return (
    <section className='Section_FeaturedProducts'>
      <div className='FeaturedProducts'>
        <div className='FeaturedProducts__Heading'>
          <h1>Flash Sale</h1>
          <button className='custom-btn btn-2'>More</button>
        </div>
        <div className='FeaturedProducts__Products'>
          {featured
            ? featured[1]?.items
                .filter((el, idx) => idx < 4)
                .map((el, idx) => (
                  <div className='ProductCard' key={idx}>
                    <div className='Image'>
                      <img src={el.imageUrl} alt='ewe' />
                    </div>
                    <span className='Price'>${el.price}</span>
                    <span className='Ratings'>Rating</span>
                    <span className='Name'>{el.name}</span>
                  </div>
                ))
            : null}
        </div>
      </div>
    </section>
  )
}
const mapStateToProps = createStructuredSelector({
  featured: selectCollectionsForPreview,
})
export default connect(mapStateToProps)(FeaturedProducts)
