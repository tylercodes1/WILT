import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyANeh3iM3qSqv3-oTOmPaMsG_Wah0vhwFQ',
  authDomain: 'heroic-ruler-304106.firebaseapp.com',
  projectId: 'heroic-ruler-304106',
  storageBucket: 'heroic-ruler-304106.appspot.com',
  messagingSenderId: '376568567548',
  appId: '1:376568567548:web:be958fa692ecc4fd4ee979',
  measurementId: 'G-DJGEQHPRWH',
}

// next.js will sometimes try and initialize the app twice, which will throw an error
// Source: Fireship
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
