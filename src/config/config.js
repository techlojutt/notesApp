// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvAUqqJyS7J3S2fw5h13qaXfpznI47m1E",
  authDomain: "notesapp-7c2ce.firebaseapp.com",
  projectId: "notesapp-7c2ce",
  storageBucket: "notesapp-7c2ce.firebasestorage.app",
  messagingSenderId: "572476426140",
  appId: "1:572476426140:web:b5d7cbb4a896cd7f85ea59",
  measurementId: "G-T4WCMMPRQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);