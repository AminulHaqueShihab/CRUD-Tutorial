// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrxNJpZFRWJIaJ-UBjcl2ljZQLZjHoRm8",
    authDomain: "crud-tutorial-d956a.firebaseapp.com",
    projectId: "crud-tutorial-d956a",
    storageBucket: "crud-tutorial-d956a.appspot.com",
    messagingSenderId: "343546415370",
    appId: "1:343546415370:web:b816e6c928328ccb5a92f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);