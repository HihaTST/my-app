import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZtXM8FmO3f0COWA6gK4XO1MQ_cebAJ7I",
  authDomain: "my-app-b1ff0.firebaseapp.com",
  projectId: "my-app-b1ff0",
  storageBucket: "my-app-b1ff0.appspot.com",
  messagingSenderId: "861304849306",
  appId: "1:861304849306:web:ca2a628d46b67a789c3023"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new auth.GoogleAuthProvider()

export { auth, provider }
