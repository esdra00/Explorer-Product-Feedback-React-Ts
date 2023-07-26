// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCgyGTLiwA-3qA2fd10evw0wwUM5Xf9yXQ",
	authDomain: "product-feedback-app-12510.firebaseapp.com",
	projectId: "product-feedback-app-12510",
	storageBucket: "product-feedback-app-12510.appspot.com",
	messagingSenderId: "210033877400",
	appId: "1:210033877400:web:990d5b58681d098f088bed",
	measurementId: "G-QD33FNC4MX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(app);
