import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCOUBoBnor3-YYjH82wCKfGSadgiIsfZE",
  authDomain: "groovemade-ar.firebaseapp.com",
  projectId: "groovemade-ar",
  storageBucket: "groovemade-ar.appspot.com",
  messagingSenderId: "134996884141",
  appId: "1:134996884141:web:918aa564811644c240a424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
