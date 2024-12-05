import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};