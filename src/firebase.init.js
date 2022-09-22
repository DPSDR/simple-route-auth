// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxLOYkzJY-42RZciqxxiGL7UglpTP4WLs",
    authDomain: "simple-router-auth.firebaseapp.com",
    projectId: "simple-router-auth",
    storageBucket: "simple-router-auth.appspot.com",
    messagingSenderId: "990833891605",
    appId: "1:990833891605:web:535cd2d8aeb9533074711c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;