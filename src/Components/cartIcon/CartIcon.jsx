import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import { connect } from 'react-redux'
import { ToggleCartHidden } from '../../Redux/Cart/CartActions'
const CartIcon = ({ ToggleCartHidden }) => (
  <div onClick={ToggleCartHidden} className='icon'>
    <ShoppingCartIcon />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
