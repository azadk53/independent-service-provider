// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwb-O9dfCiUT4bGZv8DGMkTyGv7Q09CZU",
    authDomain: "realtor-authentication-project.firebaseapp.com",
    projectId: "realtor-authentication-project",
    storageBucket: "realtor-authentication-project.appspot.com",
    messagingSenderId: "372492266918",
    appId: "1:372492266918:web:64ac9b8350803e6e97b367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;