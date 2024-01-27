// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-WaIl7zG4PvDR5qfrLd6ARuOamhRBNkY",
  authDomain: "e-shop-jb-vid.firebaseapp.com",
  projectId: "e-shop-jb-vid",
  storageBucket: "e-shop-jb-vid.appspot.com",
  messagingSenderId: "146281777824",
  appId: "1:146281777824:web:2bad98162c95e1eb4d17c5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;