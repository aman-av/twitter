import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtKTiwhTpT0RQEsxAW-O6vHFEk0BZ0tSw",
    authDomain: "twitter-a8672.firebaseapp.com",
    projectId: "twitter-a8672",
    storageBucket: "twitter-a8672.appspot.com",
    messagingSenderId: "278755935776",
    appId: "1:278755935776:web:a255c152d74f51ec24de45",
    measurementId: "G-BFW9T86SV4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;