import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCF5PUKy2JgDooKksBdmEKCnySSd74g5DE',
  authDomain: 'active-clothing.firebaseapp.com',
  projectId: 'active-clothing',
  storageBucket: 'active-clothing.appspot.com',
  messagingSenderId: '455534783944',
  appId: '1:455534783944:web:38018ae57a0f706a94a4fd',
  measurementId: 'G-YQEZPBB5MJ',
}

export const userProfileDoc = async (userAuth, additionaldata) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth
    const creadesAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        creadesAt,
        photoURL,
        ...additionaldata,
      })
    } catch (error) {
      console.log('Error Creating user', error.message)
    }
  }
  return userRef
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
