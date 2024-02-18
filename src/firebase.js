import firebase  from "firebase/app";
import 'firebase/firestore';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDIu_Qs4Wx5X6zv8edwQQkZ3jpAdJ592_Q",
  authDomain: "react-hooks-blog-9c874.firebaseapp.com",
  projectId: "react-hooks-blog-9c874",
  storageBucket: "react-hooks-blog-9c874.appspot.com",
  messagingSenderId: "1014577752688",
  appId: "1:1014577752688:web:8118744bb2f47d891422b5"
};

const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);