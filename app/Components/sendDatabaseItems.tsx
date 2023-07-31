import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Database } from "firebase/database";
import { ref, child, get } from "firebase/database";
import { data } from "autoprefixer";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "portfolio-website-3aa27.firebaseapp.com",
  projectId: "portfolio-website-3aa27",
  storageBucket: "portfolio-website-3aa27.appspot.com",
  messagingSenderId: "563915856479",
  appId: "1:563915856479:web:6489037410dfb3da1919ea",
  measurementId: "G-E9CXJJ7T0G",
  databaseURL: "https://portfolio-website-3aa27.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const databaseReference = Database.ref();

const allData = await databaseReference.get();

console.log(allData);

export default db;
