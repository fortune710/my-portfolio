// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDeyXpHm5AudyUL684E_U3euV2Y0-bPcxM",
  authDomain: "fortune-alebiosu.firebaseapp.com",
  projectId: "fortune-alebiosu",
  storageBucket: "fortune-alebiosu.appspot.com",
  messagingSenderId: "932511395595",
  appId: "1:932511395595:web:908de1055515c5210ffc0e",
  measurementId: "G-BZ5CJ8DH33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);