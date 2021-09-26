import React from 'react'
import SignIn from '../../Components/SignIn/Signin.component'
// import { auth } from '../../Components/Firebase/firebase.utils'
// import { Link } from 'react-router-dom'

const SigninSignup = ({ currentuser }) => (
  <div className='SigninSignup'>
    <h1>Sign up Sign In Page</h1>
    <SignIn />
    {/* {currentuser ? (
      <div onClick={() => auth.signOut()}>Sign oUt</div>
    ) : (
      <Link to='/signin'>Sign In</Link>
    )} */}
  </div>
)

export default SigninSignup
