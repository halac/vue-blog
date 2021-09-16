import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGo60TBeYploqzlHFgIclwCFPqVtoEH48",
    authDomain: "abdirisak-firebase-site.firebaseapp.com",
    projectId: "abdirisak-firebase-site",
    storageBucket: "abdirisak-firebase-site.appspot.com",
    messagingSenderId: "428907351709",
    appId: "1:428907351709:web:fda1734a7aeb1360d78e74"
  };
  
  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  // export firestore
  export { projectFirestore, timestamp }