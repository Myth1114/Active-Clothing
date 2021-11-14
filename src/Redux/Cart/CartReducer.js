import CartActionTypes from './CartTypes'
import { addItemToCart, removeItemFromCart } from './CartUtils'
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        //here we are storing privious cart items as well as any new item added to cart
      }

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}
export default CartReducer
