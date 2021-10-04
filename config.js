import firebase from 'firebase'
require('firebase/firestore')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4p0_Xme52nsq2wbVy66QHlvhZsbcqjl4",
  authDomain: "wily-c3444.firebaseapp.com",
  projectId: "wily-c3444",
  storageBucket: "wily-c3444.appspot.com",
  messagingSenderId: "668132694499",
  appId: "1:668132694499:web:47c2e06c4a1ff5dbc668d6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();