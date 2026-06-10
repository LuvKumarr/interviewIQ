import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-3f2c9.firebaseapp.com",
  projectId: "interviewiq-3f2c9",
  storageBucket: "interviewiq-3f2c9.firebasestorage.app",
  messagingSenderId: "287377902442",
  appId: "1:287377902442:web:360762a7b26b67c4fcf313"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth , provider }