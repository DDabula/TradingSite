// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config object from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCqzKdg7iMqvwILsQmIB2MgrJdvRzw2osA",
  authDomain: "trade-29232.firebaseapp.com",
  projectId: "trade-29232",
  storageBucket: "trade-29232.firebasestorage.app",
  messagingSenderId: "491246475451",
  appId: "1:491246475451:web:9b923643aba24174a8b19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
