// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV1HMtpB1_8SSqRBvLO8y0n0FZJtCT24g",
    authDomain: "dragon-news-react-auth-f5085.firebaseapp.com",
    projectId: "dragon-news-react-auth-f5085",
    storageBucket: "dragon-news-react-auth-f5085.appspot.com",
    messagingSenderId: "208710741339",
    appId: "1:208710741339:web:717757c4b7b330f26d7e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;