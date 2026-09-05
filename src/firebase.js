import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCV6zrafVi6Qkdf4TUjd_UjTqoNi0SjeBs",
  authDomain: "portfolio-6490b.firebaseapp.com",
  projectId: "portfolio-6490b",
  storageBucket: "portfolio-6490b.firebasestorage.app",
  messagingSenderId: "691840752283",
  appId: "1:691840752283:web:2a3e9c2c73cb3ccf19443e",
  measurementId: "G-70RBNK4MGN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
