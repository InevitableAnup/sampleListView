import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCOVZpp4hQd9O1aNTMsXu9NOiCrUEzeltM",
    authDomain: "practicehigh-92e25.firebaseapp.com",
    databaseURL: "https://practicehigh-92e25.firebaseio.com",
    projectId: "practicehigh-92e25",
    storageBucket: "practicehigh-92e25.appspot.com"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const base = firebaseApp.database();