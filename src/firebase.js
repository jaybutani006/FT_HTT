import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBidQenGd9rTEIZRuhyfF1v_XOb_SPV-9w",
    authDomain: "hack-686a1.firebaseapp.com",
    projectId: "hack-686a1",
    storageBucket: "hack-686a1.appspot.com",
    messagingSenderId: "773018032623",
    appId: "1:773018032623:web:540ea260d2d3cc5c01fe1a",
    measurementId: "G-XST6WSLS58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;