import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsmJ6mn4JoTIH5xX0NU6YU-7RrYaFKLdw",
  authDomain: "precision-48666.firebaseapp.com",
  projectId: "precision-48666",
  storageBucket: "precision-48666.firebasestorage.app",
  messagingSenderId: "544677596329",
  appId: "1:544677596329:web:25ec9c1e0de4ced4a06db8",
  measurementId: "G-Z322CKW8W6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); 
export { app, analytics };