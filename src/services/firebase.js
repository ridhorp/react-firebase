// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKMuzxNADP_GNVSmBvaNAHfIrpS7bhgg0",
  authDomain: "belajar-firebase-a13f7.firebaseapp.com",
  databaseURL:
    "https://belajar-firebase-a13f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-firebase-a13f7",
  storageBucket: "belajar-firebase-a13f7.appspot.com",
  messagingSenderId: "1081740431371",
  appId: "1:1081740431371:web:fc637022f1ea30eceb370e",
  databaseURL: "https://belajar-firebase-a13f7-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);
export { auth, storage, db };
export default app;
