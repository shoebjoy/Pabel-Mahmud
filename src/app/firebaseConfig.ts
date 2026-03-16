// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIrAxUuKoC9C5HBKU5NviPEnohEK8wFww",
  authDomain: "portfolio-data-9005b.firebaseapp.com",
  projectId: "portfolio-data-9005b",
  storageBucket: "portfolio-data-9005b.appspot.com",
  messagingSenderId: "98487199485",
  appId: "1:98487199485:web:3d33c1e45c45bfcfb24094",
  measurementId: "G-GF75XEKJZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };