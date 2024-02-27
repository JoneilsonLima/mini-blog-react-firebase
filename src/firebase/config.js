import { initializeApp } from "firebase/app";
import { getFireStorage } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_5eXnzgE58CzzkFcDcphaGBGsICD1yac",
  authDomain: "miniblog-1b33e.firebaseapp.com",
  projectId: "miniblog-1b33e",
  storageBucket: "miniblog-1b33e.appspot.com",
  messagingSenderId: "240255268060",
  appId: "1:240255268060:web:d5413e651728ccedd73019"
};

const app = initializeApp(firebaseConfig);

const db = getFireStorage(app)

export {db};