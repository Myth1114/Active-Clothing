import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../Redux/Cart/CartSelector'
import {
  clearItemFromCart,
  removeItem,
  AddItem,
} from '../../Redux/Cart/CartActions'

const CartPage = ({ cartItems, clearCart, addItem, removeItem }) => (
  <div>
    {cartItems.length > 0 ? (
      cartItems.map((item, idx) => {
        return (
          <div key={idx}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <div className='quantity'>
              <div onClick={() => removeItem(item)}>&#10094;</div>
              <span>{item.quantity}</span>
              <div onClick={() => addItem(item)}>&#10095;</div>
            </div>
            <button onClick={() => clearCart(item)}>X</button>
          </div>
        )
      })
    ) : (
      <h1>Empty</h1>
    )}
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
const mapDispatchToProps = (dispatch) => ({
  clearCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
