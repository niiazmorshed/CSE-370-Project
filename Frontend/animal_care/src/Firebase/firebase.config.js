// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgE44kQcENRomqLlbiR9sOzjBeW0XUtH4",
  authDomain: "pet-mate-ab2de.firebaseapp.com",
  projectId: "pet-mate-ab2de",
  storageBucket: "pet-mate-ab2de.appspot.com",
  messagingSenderId: "392080885596",
  appId: "1:392080885596:web:bfb768cb4e319c4a3ba399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
