// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgpP4HDiOSugRjxVRAxoskmixw5ImP_V4",
  authDomain: "todo-app-c7cb3.firebaseapp.com",
  projectId: "todo-app-c7cb3",
  storageBucket: "todo-app-c7cb3.appspot.com",
  messagingSenderId: "937500081467",
  appId: "1:937500081467:web:b42bd7071968b343bc8b1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);