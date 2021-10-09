import React from 'react'
import CartDropdownItems from '../CartDropdownItems/CartDropdownItems'
import { selectCartItems } from '../../Redux/Cart/CartSelector'
import { connect } from 'react-redux'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <h1>Cart({cartItems.length})</h1>
    <div className='cart-items'>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartDropdownItems key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span>no items</span>
      )}
    </div>
    <button className='custom-btn btn-2'>Checkout</button>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})
export default connect(mapStateToProps)(CartDropdown)
