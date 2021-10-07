import React from 'react'
import { connect } from 'react-redux'
import { AddItem } from '../../Redux/Cart/CartActions'

const ProductCard = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item
  return (
    <section className='ProductSection'>
      <div className='ProductItems' key={id}>
        <div className='ProductItems__Image'>
          <img src={imageUrl} alt='yyy' />
        </div>
        <span className='ProductItems__name'>{name}</span>
        <span className='ProductItems__price'>{price}</span>
        <div>
          <button onClick={() => addItem(item)} className='custom-btn btn-2'>
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(AddItem(item)),
})
export default connect(null, mapDispatchToProps)(ProductCard)
