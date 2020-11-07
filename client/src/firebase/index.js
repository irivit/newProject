/**
 * Firebase Login
 * Reactify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase 
const config = {
   apiKey: "AIzaSyDqk9B_ShirSz3SBkXcaPfme7Oc5kHsyx0",
   authDomain: "crewupweb.firebaseapp.com",
   databaseURL: "https://crewupweb.firebaseio.com",
   projectId: "crewupweb",
   storageBucket: "crewupweb.appspot.com",
   messagingSenderId: "689061689482",
   appId: "1:689061689482:web:88f1722adac33b68d99573"
};

firebase.initializeApp(config);

const auth = firebase.auth();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
// const githubAuthProvider = new firebase.auth.GithubAuthProvider();
// const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
   auth,
   // googleAuthProvider,
   // githubAuthProvider,
   // facebookAuthProvider,
   // twitterAuthProvider,
   database
};
