// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // optional
import { getAuth } from 'firebase/auth'; // optional
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxErFFOj3pVUcFpx00M8WbTPmAB2xk6dE",
  authDomain: "vybecoderz-web.firebaseapp.com",
  projectId: "vybecoderz-web",
  storageBucket: "vybecoderz-web.firebasestorage.app",
  messagingSenderId: "529898823182",
  appId: "1:529898823182:web:16e6155079d3e2dbaa665f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const db = getFirestore(app);
export const auth = getAuth(app);