// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD3ZFLHeUzL7mh9PEj9DEcgO9EwUrhkku8",
  authDomain: "netflixgpt-23b93.firebaseapp.com",
  projectId: "netflixgpt-23b93",
  storageBucket: "netflixgpt-23b93.appspot.com",
  messagingSenderId: "797762836660",
  appId: "1:797762836660:web:181a5adeac3cd4e0b19fe1",
  measurementId: "G-RWKK2KLPTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
