// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAJX2or_996nnn96AqgvfoBANV9sFGpCmk",
    authDomain: "practice-f3266.firebaseapp.com",
    projectId: "practice-f3266",
    storageBucket: "practice-f3266.appspot.com",
    messagingSenderId: "1004103212487",
    appId: "1:1004103212487:web:99de570405e4ee92644de2",
    measurementId: "G-CFZX5JLP79"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const storage = getStorage(app); 

export { app, db, auth,analytics ,googleProvider,signInWithPopup,storage};
