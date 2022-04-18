// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB43-juUKps1K_Rbo8ZliskFVE1uVtoecA",
    authDomain: "biotracker-a9934.firebaseapp.com",
    projectId: "biotracker-a9934",
    storageBucket: "biotracker-a9934.appspot.com",
    messagingSenderId: "545248968537",
    appId: "1:545248968537:web:672484ec55f19549375648",
    measurementId: "G-NB29RQ2Y70"
};

// Initialize Firebase
var app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}


const auth = firebase.auth();

export { auth };