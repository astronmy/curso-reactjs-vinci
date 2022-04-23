import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1hzy8Rg7ixOnX9d3ml1_ryMCu3PoNPjw",
  authDomain: "coderhousereactjs-3c883.firebaseapp.com",
  projectId: "coderhousereactjs-3c883",
  storageBucket: "coderhousereactjs-3c883.appspot.com",
  messagingSenderId: "285451659879",
  appId: "1:285451659879:web:e146b0eb21dc9c816c82c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseStorage = getFirestore(app)