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
    const correctCharsElement = document.getElementById('correctChars');

    const playfulSentences = [
        "Come on BZZbZZZ you got this",
        "U really thought I was that dumb",
        "TITTIEESSSS",
        "aaoiinn you're really pretty like that",
        "hahha saik",
        "That guess was soooo bad",
        "Is your password hiding in plain sight?",
        "You're getting warmer... or colder?",
        "Maybe try a dance move for good luck!",
        "Did you consult the spa spirits for the password?",
        "Damm ca cetait un move cst (no offense)",
        "you might need a new guess at this point",
        "can you tell i reallyyy love titties",
        "wow.",
        "Are you trying to unlock a secret spa dance party?",
        "Getting closer! Or maybe not...",
        "Feeling the spa vibes yet? Password might be too!",
        "you could try induction mathematique"
    ];

    const pass = "++InfiniteLoopOfLoveForBzzBzz";
    let correctCharsCount = 0;

    for (let i = 0; i < enteredPassword.length && i < pass.length; i++) {
        if (enteredPassword[i] === pass[i]) {
            correctCharsCount++;
        } else {
            break;
        }
    }

    if (enteredPassword === pass) {
        window.location.href = 'index.html';
        localStorage.setItem("logged", "true");
    } else {
        const randomIndex = Math.floor(Math.random() * playfulSentences.length);
        const randomSentence = `${playfulSentences[randomIndex]} (${randomIndex + 1}/${playfulSentences.length})`;
        errorMessageElement.textContent = randomSentence;
        correctCharsElement.textContent = `Correct characters: ${correctCharsCount}/?`;
    }
};


//Passwords:123recurrence