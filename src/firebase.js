import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAffMt9aqX6mjoQdzvx74-k_s-T13y9C0g",
  authDomain: "tinder-clone-18fcb.firebaseapp.com",
  databaseURL: "https://tinder-clone-18fcb.firebaseio.com",
  projectId: "tinder-clone-18fcb",
  storageBucket: "tinder-clone-18fcb.appspot.com",
  messagingSenderId: "932273467766",
  appId: "1:932273467766:web:24cd96bec830c483308a57",
  measurementId: "G-GWG2TG0EZ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default firebase;
