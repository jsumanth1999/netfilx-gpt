// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrDp3XZlozUsp1x1nuOEg8IkLppMi6ET8",
  authDomain: "netflixgpt-f7c15.firebaseapp.com",
  projectId: "netflixgpt-f7c15",
  storageBucket: "netflixgpt-f7c15.appspot.com",
  messagingSenderId: "900911260654",
  appId: "1:900911260654:web:c40b1aa1797a82a43da4ff",
  measurementId: "G-VPPDYRH1VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
