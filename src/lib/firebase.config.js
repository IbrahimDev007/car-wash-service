// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByHp72eqMpYpuSmEJFZLM30-xgY0-c6tk",
  authDomain: "simple-firebase-1fa7c.firebaseapp.com",
  projectId: "simple-firebase-1fa7c",
  storageBucket: "simple-firebase-1fa7c.appspot.com",
  messagingSenderId: "262386690329",
  appId: "1:262386690329:web:28ea0b23960889a0fffd88",
  measurementId: "G-P5RSLTVTB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app
