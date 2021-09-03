
import firebase  from '@firebase/app'
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyB_y64V93bxRuNoJed-Dm7mXDwBQN-s51I",
    authDomain: "authenticate-dev-684e8.firebaseapp.com",
    databaseURL: "https://authenticate-dev-684e8-default-rtdb.firebaseio.com",
    projectId: "authenticate-dev-684e8",
    storageBucket: "authenticate-dev-684e8.appspot.com",
    messagingSenderId: "20188737321",
    appId: "1:20188737321:web:5b02d2c0a827cad0e29138"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;