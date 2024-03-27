import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNLtTUifjZHgX2mYXZP4XhdkHVJa9NDck",
  authDomain: "resumeshaper-5029d.firebaseapp.com",
  projectId: "resumeshaper-5029d",
  storageBucket: "resumeshaper-5029d.appspot.com",
  messagingSenderId: "501063544339",
  appId: "1:501063544339:web:22b2d6f8d54406e690d9e6",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
export const storage = getStorage(app);
