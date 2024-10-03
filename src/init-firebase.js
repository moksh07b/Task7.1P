// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbAprw2wYKUBqlx54pyEuX3SlOaXoIvQY",
  authDomain: "sit313-full-stack.firebaseapp.com",
  projectId: "sit313-full-stack",
  storageBucket: "sit313-full-stack.appspot.com",
  messagingSenderId: "87782067630",
  appId: "1:87782067630:web:4e0494a8706bf4ef014c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);