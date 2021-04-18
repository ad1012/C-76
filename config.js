import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD2WOGyNpt16l01pHheIBA5zW6ZmPJh_JU",
    authDomain: "book-santa-e41ca.firebaseapp.com",
    projectId: "book-santa-e41ca",
    storageBucket: "book-santa-e41ca.appspot.com",
    messagingSenderId: "157041885175",
    appId: "1:157041885175:web:1072370ee3912edde078f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()