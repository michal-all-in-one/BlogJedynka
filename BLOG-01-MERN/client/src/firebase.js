// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "test-mern-blog.firebaseapp.com",
  projectId: "test-mern-blog",
  storageBucket: "test-mern-blog.appspot.com",
  messagingSenderId: "118174681534",
  appId: "1:118174681534:web:f8fac03e255fe729cad1ef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);