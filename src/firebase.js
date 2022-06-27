// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI53AllVLZ5eoZ9nbvvp5ulwYIwVAeudM",
  authDomain: "movie-app-1755d.firebaseapp.com",
  projectId: "movie-app-1755d",
  storageBucket: "movie-app-1755d.appspot.com",
  messagingSenderId: "238416437738",
  appId: "1:238416437738:web:d1062519c9a9fd37fc9293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { app, auth };
export default db;
