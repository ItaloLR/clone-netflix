import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCjOmGdfO9thjIApWHgfJ5g3nlQGSFo7aI",
    authDomain: "clone-netflix-c8fbc.firebaseapp.com",
    projectId: "clone-netflix-c8fbc",
    storageBucket: "clone-netflix-c8fbc.appspot.com",
    messagingSenderId: "1023342325531",
    appId: "1:1023342325531:web:f1b68b5ff0c163f9e06dbe",
    measurementId: "G-MYV239WE27"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
