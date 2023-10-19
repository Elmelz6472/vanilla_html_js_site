// your-script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAp4xLElYz5eEcrnfjtQGO8fYrHli-YrXg",
    authDomain: "spaa-dc965.firebaseapp.com",
    projectId: "spaa-dc965",
    storageBucket: "spaa-dc965.appspot.com",
    messagingSenderId: "394735502752",
    appId: "1:394735502752:web:266ede15ac71454bee90c5",
    measurementId: "G-TJTDYSW8N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let pass;

const database = getDatabase();
const passRef = ref(database, 'pass');

get(passRef).then((snapshot) => {
    if (snapshot.exists()) {
        pass = snapshot.val();
    } else {
    }
}).catch((error) => {
    console.error("Error getting password:", error);
});

window.checkPassword = () => {
    const enteredPassword = document.getElementById('passwordInput').value;
    const errorMessageElement = document.getElementById('errorMessage');


    console.log("Entered Password:", enteredPassword);

    if (enteredPassword === pass) {
        console.log("Correct password. Redirecting...");
        window.location.href = 'index.html';
        localStorage.setItem("logged", "true");
    } else {
        console.log("Incorrect password. Please try again.");
        errorMessageElement.textContent = "Come on you really thought it was gonna be that easy (that's an L).";
    }
};

