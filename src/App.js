import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import './App.css'
import { auth, userProfileDoc } from './Components/Firebase/firebase.utils'
import Header from './Components/Header/Header.component'
import UserProfile from './Components/Userprofile/UserProfile'
// import UserProfile from './Components/Userprofile/UserProfile'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage.component'
import SigninSignup from './Pages/SigninSignup/SigninSignup.component'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await userProfileDoc(userAuth)

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot)
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state)
            }
          )
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div className='App'>
        <Header currentuser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            path='/signin'
            component={SigninSignup}
            currentuser={this.state.currentUser}
          />
          <Route
            path='/userProfile'
            // component={UserProfile}
            render={() =>
              !!this.state.currentUser ? (
                // <div>this is {this.state.currentUser.displayName} </div>
                <UserProfile currentuser={this.state.currentUser} />
              ) : (
                <div>
                  <Link to='/signin'>Sign In First</Link>
                </div>
              )
            }
          />
        </Switch>
        {/* <Route exact path='/' component={Homepage} />
        <Route path='/topic' component={Topics} />
        <Route path='/topic/:topicId' component={TopicDetail} /> */}
      </div>
    )
  }
}

export default App
