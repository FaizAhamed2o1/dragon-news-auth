// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6unMPHjn6GeydqtNxDN8PX3OA0-WHshU",
  authDomain: "dragon-news-auth-cb4c3.firebaseapp.com",
  projectId: "dragon-news-auth-cb4c3",
  storageBucket: "dragon-news-auth-cb4c3.firebasestorage.app",
  messagingSenderId: "313344802412",
  appId: "1:313344802412:web:70a7ac91c5a947be6c6249",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
