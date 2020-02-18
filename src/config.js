import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcxo2OneUSLrwqNoo7PugEFX1GtY3add4",
    authDomain: "todoos.firebaseapp.com",
    databaseURL: "https://todoos.firebaseio.com",
    projectId: "todoos",
    storageBucket: "todoos.appspot.com",
    messagingSenderId: "178524908825",
    appId: "1:178524908825:web:e6cf8ef600d15d6976a988",
    measurementId: "G-3FNQ2THYNW"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();