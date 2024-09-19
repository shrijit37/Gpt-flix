// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlC-BMiss6gwVtxBRrc97gyluiXCEykKo",
    authDomain: "netflixgpt-c6cba.firebaseapp.com",
    projectId: "netflixgpt-c6cba",
    storageBucket: "netflixgpt-c6cba.appspot.com",
    messagingSenderId: "1084136231696",
    appId: "1:1084136231696:web:98e389ea40afd6d74ecb95",
    measurementId: "G-7P3GF2W12R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();