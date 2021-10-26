import React from 'react'
import CartDropdownItems from '../CartDropdownItems/CartDropdownItems'
import { selectCartItems } from '../../Redux/Cart/CartSelector'
import { ToggleCartHidden } from '../../Redux/Cart/CartActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const CartDropdown = ({ cartItems, history, dispatch }) => (
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
    <button
      onClick={() => {
        history.push('/cart')
        dispatch(ToggleCartHidden())
      }}
      className='custom-btn btn-2'
    >
      Checkout
    </button>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
