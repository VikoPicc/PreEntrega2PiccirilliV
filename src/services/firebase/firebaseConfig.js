import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDkUVWI-uroRgQm-Y2sz5iIutI-iZyGxbw",
  authDomain: "entregafinal-piccirilliv.firebaseapp.com",
  projectId: "entregafinal-piccirilliv",
  storageBucket: "entregafinal-piccirilliv.appspot.com",
  messagingSenderId: "910965824519",
  appId: "1:910965824519:web:0425122470ef96c4229ea2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
