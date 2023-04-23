// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAixyX2tcKEaY__urV99RKYfSDe4rJjpY",
  authDomain: "minor-project-eb5c1.firebaseapp.com",
  projectId: "minor-project-eb5c1",
  storageBucket: "minor-project-eb5c1.appspot.com",
  messagingSenderId: "799235112778",
  appId: "1:799235112778:web:3f49f6aa30bc1e7d248bb3",
  measurementId: "G-DTL5PGQQEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export const storage = getStorage();
