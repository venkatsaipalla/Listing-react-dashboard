import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration - Copied from FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDZmfBXuZfPpEVRiQJjGuOwxgVImfbm67o",
  authDomain: "open-in-app-d0e1b.firebaseapp.com",
  projectId: "open-in-app-d0e1b",
  storageBucket: "open-in-app-d0e1b.appspot.com",
  messagingSenderId: "763076028405",
  appId: "1:763076028405:web:d6c5174c0f4eab03e462bc",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
