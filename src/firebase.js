import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOMOGf3jvmDyMasRIzzmQ8blX20vgorHA",
    authDomain: "instagram-clone-react-ae1b3.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-ae1b3.firebaseio.com",
    projectId: "instagram-clone-react-ae1b3",
    storageBucket: "instagram-clone-react-ae1b3.appspot.com",
    messagingSenderId: "37947017013",
    appId: "1:37947017013:web:858bfe2ec045bb8e7c2e7c",
    measurementId: "G-T5MJ0S7KWN"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
