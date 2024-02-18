// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEsOF41xnW9JkNx2mOCVaUDxjfZtuuls",
  authDomain: "takaful-solution.firebaseapp.com",
  projectId: "takaful-solution",
  storageBucket: "takaful-solution.appspot.com",
  messagingSenderId: "288179252116",
  appId: "1:288179252116:web:85f798128b76bf83b23d81",
  measurementId: "G-0Z9PQZRP4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
