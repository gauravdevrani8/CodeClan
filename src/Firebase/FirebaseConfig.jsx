// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcdYFC1UZcdiwpGrZiV8yH3j5FIDtEQxA",
  authDomain: "codeclan-5bf46.firebaseapp.com",
  projectId: "codeclan-5bf46",
  storageBucket: "codeclan-5bf46.appspot.com",
  messagingSenderId: "449223370960",
  appId: "1:449223370960:web:acea0009417b4a3998d6d5",
  measurementId: "G-619ND6YJ74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDb= getFirestore(app);
const auth= getAuth(app);
const storage= getStorage(app);

export { app,
    analytics,
    fireDb,
    auth,
    storage
}