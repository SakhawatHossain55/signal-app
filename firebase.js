import firebase from "firebase";
// import "firebase/firestore"
// import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBLM4lgIXywC9Wz3QBih8C8GqZKQ_MOK18",
  authDomain: "inzamamul-portfolio.firebaseapp.com",
  projectId: "inzamamul-portfolio",
  storageBucket: "inzamamul-portfolio.appspot.com",
  messagingSenderId: "59026800710",
  appId: "1:59026800710:web:e7b7277f122d85f6cd8a47",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
