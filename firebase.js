// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjZPN13v1UjrFRuTdATd_cRryzR5_6yEA",
  authDomain: "flashcard-saas-41595.firebaseapp.com",
  projectId: "flashcard-saas-41595",
  storageBucket: "flashcard-saas-41595.appspot.com",
  messagingSenderId: "1068021996840",
  appId: "1:1068021996840:web:577468addbd67eeab8441d",
  measurementId: "G-0F26277LRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
