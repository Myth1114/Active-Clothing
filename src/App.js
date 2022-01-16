import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
// import { Link } from 'react-router-dom'
import { auth, userProfileDoc } from './Components/Firebase/firebase.utils'
import Header from './Components/Header/Header.component'
import UserProfile from './Components/Userprofile/UserProfile'
// import UserProfile from './Components/Userprofile/UserProfile'
import Homepage from './Pages/Homepage/Homepage'
import ShopPage from './Pages/ShopPage/ShopPage.component'
import SigninSignup from './Pages/SigninSignup/SigninSignup.component'

import { connect } from 'react-redux'
import { setCurrentUser } from './Redux/User/UserAction'
import CartPage from './Components/CartPage/CartPage'

class App extends React.Component {
  unsubscribeFromAuth = null

  // componentDidMount() {
  //   const { setCurrentUser, collectionsArray } = this.props
  //   console.log(collectionsArray, 'This is collectionarray')
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await userProfileDoc(userAuth)
  //       userRef.onSnapshot((snapShot) => {
  //         // console.log(snapShot)
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         })
  //       })
  //     }
  //     setCurrentUser(userAuth);
  //     addCollectionAndDocuments(
  //       'collections',
  //       collectionsArray.map(({ title, items }) => ({ title, items }))
  //     )
  //   })
  // }
  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await userProfileDoc(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }

      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SigninSignup />
            }
          />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/cart' component={CartPage} />
          {/* render={() =>
              !!this.state.currentUser ? (
                // <div>this is {this.state.currentUser.displayName} </div>
                <UserProfile currentuser={this.state.currentUser} />
              ) : (
                <div>
                  <Link to='/signin'>Sign In First</Link>
                </div>
              )
            } */}
        </Switch>
        {/* <Route exact path='/' component={Homepage} />
        <Route path='/topic' component={Topics} />
        <Route path='/topic/:topicId' component={TopicDetail} /> */}
      </>
    )
  }
}
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
//   collectionsArray: selectCollectionsForPreview,
// })
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
