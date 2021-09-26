import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase/firebase.utils'

const UserProfile = ({ currentuser }) => (
  <div>
    <h1>Profile</h1>
    <span>
      {currentuser && currentuser.displayName ? (
        <div>
          <h1>{currentuser.displayName}</h1>
          <h2>{currentuser.email}</h2>
          {/* <img
            src={currentuser.photoURL}
            alt=''
            width='100px'
            height='180px'
          ></img> */}
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

export default UserProfile
