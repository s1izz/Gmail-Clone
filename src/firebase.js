import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBNlrCPHBpTgerbqoue7bzT2Y_pharALY0",
    authDomain: "clone-22039.firebaseapp.com",
    projectId: "clone-22039",
    storageBucket: "clone-22039.appspot.com",
    messagingSenderId: "336638028671",
    appId: "1:336638028671:web:4d3c6c22e50a88d049484a",
    measurementId: "G-SPJHSBL49W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }
  