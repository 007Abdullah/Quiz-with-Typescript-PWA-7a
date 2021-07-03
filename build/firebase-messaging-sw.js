importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyBd4JbD9gt73_5ZSBsnjJ7Y1ezTuj6RM4U",
    authDomain: "quiz-pwa-proj.firebaseapp.com",
    projectId: "quiz-pwa-proj",
    storageBucket: "quiz-pwa-proj.appspot.com",
    messagingSenderId: "463032096707",
    appId: "1:463032096707:web:884bd4d8f6fd25df090f76",
    measurementId: "G-PS6XD094V7"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();