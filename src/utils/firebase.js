// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWVJyrnoDixV8vfK7m998vb5N2CUmLqds",
  authDomain: "netflixclone-d8aa4.firebaseapp.com",
  projectId: "netflixclone-d8aa4",
  storageBucket: "netflixclone-d8aa4.appspot.com",
  messagingSenderId: "210703753204",
  appId: "1:210703753204:web:4eae4977228131a192e3a1",
  measurementId: "G-RM6KS3B9KW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
