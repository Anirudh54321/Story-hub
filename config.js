import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBrt9dEWHCB6qKMPliZUOgt9azFox5lGZY",
    authDomain: "wilyapp-ff32c.firebaseapp.com",
    projectId: "wilyapp-ff32c",
    storageBucket: "wilyapp-ff32c.appspot.com",
    messagingSenderId: "1030688354324",
    appId: "1:1030688354324:web:dbfc0d66da7cd51fa57701"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()