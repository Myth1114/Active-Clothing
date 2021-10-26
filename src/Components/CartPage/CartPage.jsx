import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../Redux/Cart/CartSelector'
import { clearItemFromCart } from '../../Redux/Cart/CartActions'

const CartPage = ({ cartItems, clearCart }) => (
  <div>
    {cartItems.map((item, idx) => {
      return (
        <div key={idx}>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <h1 onClick={clearCart()}>X</h1>
        </div>
      )
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
const mapDispatchToProps = (dispatch) => ({
  clearCart: (item) => dispatch(clearItemFromCart(item)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
