// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIGOC_LvA_nP7eYBdQl_3IKJwUgmxUJa8",
  authDomain: "atg-task-5581e.firebaseapp.com",
  projectId: "atg-task-5581e",
  storageBucket: "atg-task-5581e.appspot.com",
  messagingSenderId: "653754930504",
  appId: "1:653754930504:web:b2a897d0a474fdcad10f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app)

export default auth;