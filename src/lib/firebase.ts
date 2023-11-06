// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYe-6z6mvUPG_tzPIVOqX95-86ra054Nw",
    authDomain: "job-portal-clone.firebaseapp.com",
    projectId: "job-portal-clone",
    storageBucket: "job-portal-clone.appspot.com",
    messagingSenderId: "503471247148",
    appId: "1:503471247148:web:bb1d0b8b63e16cdaeb2689"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()