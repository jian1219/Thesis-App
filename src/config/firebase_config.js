
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeu7yuTAIdKA388JOnM4nfVj9jb78Ko60",
  authDomain: "thesisapp-89080.firebaseapp.com",
  projectId: "thesisapp-89080",
  storageBucket: "thesisapp-89080.appspot.com",
  messagingSenderId: "406600148911",
  appId: "1:406600148911:web:8685b4b140790a079df15a",
  measurementId: "G-X0D3ZP72M8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();