// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAbDy_InHWnLiAEMUeAumj5Kl9spSu9A4",
  authDomain: "little-lemon-2c547.firebaseapp.com",
  projectId: "little-lemon-2c547",
  storageBucket: "little-lemon-2c547.appspot.com",
  messagingSenderId: "82101207273",
  appId: "1:82101207273:web:c5862e9e56e6ad33067078",
  measurementId: "G-VDE49X4NY4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
/* const analytics = getAnalytics(app); */
