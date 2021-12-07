import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase/firebase.utils'
import { connect } from 'react-redux'
import { selectCurrenttUser } from '../../Redux/User/UserSelector'

const UserProfile = ({ currentuser }) => {
  console.log(currentuser)
  return (
    <div>
      <h1>Profile</h1>
      <span>
        {currentuser && currentuser.displayName ? (
          <div>
            <h1>{currentuser.displayName}</h1>
            <h2>{currentuser.email}</h2>
          </div>
        ) : (
          <div>
            <Link to='/signin'>Sign In</Link>
          </div>
        )}
      </span>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentuser: selectCurrenttUser(state),
})
export default connect(mapStateToProps)(UserProfile)
