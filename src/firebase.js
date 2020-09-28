import firebase from 'firebase';



  var firebaseConfig = {
    apiKey : process.env.apiKey
    authDomain : process.env.authDomain
    databaseURL : process.env.databaseURL
    projectId : process.env.projectId
    storageBucket : process.env.storageBucket
    messagingSenderId : process.env.messagingSenderId
    appId : process.env.appId

  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;