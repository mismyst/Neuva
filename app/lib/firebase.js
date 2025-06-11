// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ADD THIS LINE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1T-XqLdyisEJQYHfaKdR4JlMiuDIK1sM",
  authDomain: "neuva-489c3.firebaseapp.com",
  projectId: "neuva-489c3",
  storageBucket: "neuva-489c3.firebasestorage.app",
  messagingSenderId: "918034245818",
  appId: "1:918034245818:web:cfa7419e9b195288233a83",
  measurementId: "G-P53WKPTSD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore - THIS IS WHAT WAS MISSING!
export const db = getFirestore(app);

export { analytics };