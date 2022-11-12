// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi7mCAvV2ss9d3QBfwdvhEY6Llak_oBeA",
  authDomain: "insta-reels-a2e53.firebaseapp.com",
  projectId: "insta-reels-a2e53",
  storageBucket: "insta-reels-a2e53.appspot.com",
  messagingSenderId: "129039563464",
  appId: "1:129039563464:web:936f3c2f2586a61c41c3fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export {auth,storage,db}
export default app;