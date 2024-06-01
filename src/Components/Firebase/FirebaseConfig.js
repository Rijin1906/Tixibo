
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHWVlTgafR9n1RqZx9umAcQK4P7nLV8KI",
  authDomain: "tixibo-b71a3.firebaseapp.com",
  projectId: "tixibo-b71a3",
  storageBucket: "tixibo-b71a3.appspot.com",
  messagingSenderId: "761356939826",
  appId: "1:761356939826:web:8851f4d0e320ecfbab822b"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);