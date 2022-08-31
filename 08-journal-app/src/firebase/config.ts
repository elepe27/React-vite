// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZz6u8cie-RVHhKUdxuyYV_xmV950_lp4",
  authDomain: "react-cursos-c7af3.firebaseapp.com",
  projectId: "react-cursos-c7af3",
  storageBucket: "react-cursos-c7af3.appspot.com",
  messagingSenderId: "264632401113",
  appId: "1:264632401113:web:fc344ff1d04231333692c8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
