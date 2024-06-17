import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAegbWTwkJZKqs5SiiWAHeRmH8v-r97nvA",
    authDomain: "ecomerce-shop-54e40.firebaseapp.com",
    projectId: "ecomerce-shop-54e40",
    storageBucket: "ecomerce-shop-54e40.appspot.com",
    messagingSenderId: "592444547044",
    appId: "1:592444547044:web:0df856af0909f5763131f1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };