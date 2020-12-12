import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjFySsPBpTJXo50wwPpkb4ohxc8_cTLYk",
  authDomain: "journalapp-55c2e.firebaseapp.com",
  databaseURL: "https://journalapp-55c2e.firebaseio.com",
  projectId: "journalapp-55c2e",
  storageBucket: "journalapp-55c2e.appspot.com",
  messagingSenderId: "634861537777",
  appId: "1:634861537777:web:f166eb03477960ccc95c50",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
