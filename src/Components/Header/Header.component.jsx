import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PersonIcon from '@material-ui/icons/Person'
import Badge from '@material-ui/core/Badge'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import SideBar from '../SideDrawer/SideBar'
// import { auth } from '../../Components/Firebase/firebase.utils'
import { ToggleCartHidden } from '../../Redux/Cart/CartActions'
import { connect } from 'react-redux'
import CartDropdown from '../CartDropdown/CartDropdown'
// import CartIcon from '../cartIcon/CartIcon'
// import { Avatar } from '@material-ui/core'

const Header = ({ currentUser, hidden, ToggleCartHidden, cartItems }) => (
  <div className='section__Header'>
    <div className='MobileHeader'>
      <SideBar />
      <div className='headerSearchBar'>
        <form action='#' className='search'>
          <input
            type='search'
            className='search__input'
            placeholder='Search '
          />
          <button className='search__button'>
            <SearchIcon fontSize='large' className='searchIcon' />
          </button>
        </form>
      </div>
      <div className='userBox'>
        <img
          src={currentUser ? currentUser.photoURL : null}
          alt=''
          width='45px'
          height='45px'
        ></img>
      </div>
    </div>

    <header>
      <div className='headerLogo'>
        <Link to='/'>
          <h2>Active Clothing</h2>
        </Link>
      </div>
      <div className='headerSearchBar'>
        <form action='#' className='search'>
          <input
            type='search'
            className='search__input'
            placeholder='Search '
          />
          <button className='search__button'>
            <SearchIcon fontSize='large' className='searchIcon' />
          </button>
        </form>
      </div>
      <div className='headerItems'>
        <Badge
          badgeContent={cartItems.length}
          color='primary'
          className='badge'
        >
          <ShoppingCartIcon
            onClick={ToggleCartHidden}
            fontSize='large'
            className='headerItems__icons'
          />
          {/* <CartIcon fontSize='large' className='headerItems__icons' /> */}
        </Badge>

        <FavoriteBorderIcon fontSize='large' className='headerItems__icons' />

        {currentUser ? (
          <Link to='/userProfile'>
            <PersonIcon fontSize='large' className='headerItems__icons' />
          </Link>
        ) : (
          <Link to='/signin'>
            <h2>Sign In</h2>
          </Link>
        )}
        {hidden ? null : <CartDropdown />}
      </div>
    </header>
  </div>

  // <div style={{ background: 'orangered' }}>
  //   <Link to='/'>
  //     <h2>Home</h2>
  //   </Link>
  //   <Link to='/userProfile'>
  //     <h2>User Profile</h2>
  //   </Link>

  //   {currentuser ? (
  //     ''
  //   ) : (
  //     <Link to='/signin'>
  //       <h2>Sign In</h2>
  //     </Link>
  //   )}

  // </div>
)
const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden, cartItems },
}) => ({
  currentUser,
  hidden,
  cartItems,
})
const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
})

//state is the root reducer from where we are getting the user ,  currentUser value from user reducer
export default connect(mapStateToProps, mapDispatchToProps)(Header)
