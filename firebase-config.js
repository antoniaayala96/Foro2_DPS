import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWLCDKgNHjfa5XSFXWmU55kAVnTwbYv0c",
  authDomain: "com.company.foro",
  projectId: "foro-2-e9cb0",
  storageBucket: "foro-2-e9cb0.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:android:abcdefgh123456"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
