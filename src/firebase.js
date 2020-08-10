import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDEAx-WR6eiEdg8AWUPE90Q7qwslVKgABM",
  authDomain: "tik-tok-clone-9c126.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-9c126.firebaseio.com",
  projectId: "tik-tok-clone-9c126",
  storageBucket: "tik-tok-clone-9c126.appspot.com",
  messagingSenderId: "223687453247",
  appId: "1:223687453247:web:f3d305f5d19e7735bd668a"
};
  
const firebaseApp =
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;