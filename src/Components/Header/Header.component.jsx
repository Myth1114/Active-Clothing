import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PersonIcon from '@material-ui/icons/Person'
import Badge from '@material-ui/core/Badge'
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'
import SideBar from '../SideDrawer/SideBar'
// import { auth } from '../../Components/Firebase/firebase.utils'

const Header = ({ currentuser }) => (
  <div className='section__Header'>
    <SideBar />
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
        <Badge badgeContent={4} color='secondary' className='badge'>
          <ShoppingCartIcon fontSize='large' className='headerItems__icons' />
        </Badge>

        <FavoriteBorderIcon fontSize='large' className='headerItems__icons' />

        {currentuser ? (
          <Link to='/userProfile'>
            <PersonIcon fontSize='large' className='headerItems__icons' />
          </Link>
        ) : (
          <Link to='/signin'>
            <h2>Sign In</h2>
          </Link>
        )}
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

export default Header
