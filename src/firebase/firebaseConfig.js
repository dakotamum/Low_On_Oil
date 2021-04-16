// firebaseConfig.js
// Contains the config details of firebase, this should NOT be committed to your repo
// if the repo is public
// You could optionally use .env file to store these data

import firebase from 'firebase/app';
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAPRA_Ry1vNwaa2EOas65vITYtOr5eSXII",
    authDomain: "low-on-oil.firebaseapp.com",
    projectId: "low-on-oil",
    storageBucket: "low-on-oil.appspot.com",
    messagingSenderId: "2740812149",
    appId: "1:2740812149:web:e6e804c483b986d6c67b3c",
    measurementId: "G-1Y32ZRPFMF"
  };

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app