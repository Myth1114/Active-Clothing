import React from 'react'
import { signInWithGoogle } from '../Firebase/firebase.utils'
class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
    console.log(this.state)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h1>I Already Have an Account</h1>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            label='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            label='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <div>
            <button className='custom-btn btn-2' type='submit'>
              Submit
            </button>
            <button
              type='button'
              className='custom-btn btn-2'
              onClick={signInWithGoogle}
            >
              Google Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
