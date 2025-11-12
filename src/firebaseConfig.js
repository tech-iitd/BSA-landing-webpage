import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9RBYo4Yd3wL5ijHITu6645h0QXvRrjgw",
  authDomain: "bsa-iitd-website.firebaseapp.com",
  projectId: "bsa-iitd-website",
  storageBucket: "bsa-iitd-website.firebasestorage.app",
  messagingSenderId: "13963369647",
  appId: "1:13963369647:web:a3520fd34e6d6292d8885a",
  measurementId: "G-X0QN27CSSG"
};

// Initialize Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
