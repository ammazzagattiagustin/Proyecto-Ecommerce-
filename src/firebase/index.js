import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB0i-mrGkJq4izZdILwyziP6IKaKEX_ANA",
  authDomain: "proyecto-ecommerce-28108.firebaseapp.com",
  projectId: "proyecto-ecommerce-28108",
  storageBucket: "proyecto-ecommerce-28108.appspot.com",
  messagingSenderId: "1059039972058",
  appId: "1:1059039972058:web:464508fc1b9beef2ff33e3",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);
