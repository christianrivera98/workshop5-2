// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPP3GLKW38f_VEvadm7XGEpnxnYuux2X0",
  authDomain: "react-curso-ad872.firebaseapp.com",
  projectId: "react-curso-ad872",
  storageBucket: "react-curso-ad872.appspot.com",
  messagingSenderId: "49593403904",
  appId: "1:49593403904:web:0c0f303e416947e55626e5"
};

// Initialize Firebase
export  const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore (FirebaseApp);