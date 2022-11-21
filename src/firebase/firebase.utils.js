import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBYwKsVBKMF0KDFQ9p4Zv01EBxo_C5Zdvo",
    authDomain: "crwn-db-3ecb1.firebaseapp.com",
    projectId: "crwn-db-3ecb1",
    storageBucket: "crwn-db-3ecb1.appspot.com",
    messagingSenderId: "859465470677",
    appId: "1:859465470677:web:413fc1b68606cdd1d7085c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
