// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtpmL5pJZ6QM0z4xN1sHa9Czx_mK-Y4Lo",
  authDomain: "jobqueue-bed3e.firebaseapp.com",
  projectId: "jobqueue-bed3e",
  storageBucket: "jobqueue-bed3e.firebasestorage.app",
  messagingSenderId: "499915874810",
  appId: "1:499915874810:web:1196dc83ac1d447a374443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);