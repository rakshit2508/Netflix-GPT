// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTXb2A9jYQYU8PLDA8YVbvNNjP2ORyoZ8",
  authDomain: "netflix-9e8d9.firebaseapp.com",
  projectId: "netflix-9e8d9",
  storageBucket: "netflix-9e8d9.appspot.com",
  messagingSenderId: "1083623552789",
  appId: "1:1083623552789:web:9d07ed928581728988db1c",
  measurementId: "G-F191PJBGNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();