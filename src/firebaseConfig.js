import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config  = {
    apiKey: "AIzaSyBVjG_rMyQ0gWFNtwXhpORkhAd4MtyJ0BM",
    authDomain: "rbshoa.firebaseapp.com",
    databaseURL: "https://rbshoa.firebaseio.com",
    projectId: "rbshoa",
    storageBucket: "rbshoa.appspot.com",
    messagingSenderId: "787431045347",
    appId: "1:787431045347:web:e9dd3e7efe5c4b2c"
  };

  firebase.initializeApp(config);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const currentUser = auth.currentUser;

  // const settings = {
  //   timestampsInSnapshots: true
  // }
  // db.settings(settings)

  const usersCollection = db.collection('users')

  export {
    db,
    auth,
    currentUser,
    usersCollection
  }