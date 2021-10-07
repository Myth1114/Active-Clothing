import React from 'react'

const CartDropdownItems = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='sdf'></img>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
      <span className='price'>Qty:{quantity}</span>
    </div>
  </div>
)
export default CartDropdownItems
