import firebase from "firebase";

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
var messaging = firebase.messaging();

export function InitNotification() {
    Notification.requestPermission().then((permission) => {
        console.log('Permission :', permission);
        if (permission === 'granted') {
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log('Token Coming :', currentToken);
                }
                else {
                    console.log("No registration token available. Request permission to generate one.");
                }
            }).catch((error) => {
                console.log('An error occurred while retrieving token. ', error);
            })
        }
    })

}
