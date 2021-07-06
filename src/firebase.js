import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUC0Qgg_Lo-OF0Twvc4_pM7Y9OOnOxfq0',
  authDomain: 'hg-store-293e9.firebaseapp.com',
  projectId: 'hg-store-293e9',
  storageBucket: 'hg-store-293e9.appspot.com',
  messagingSenderId: '539224258375',
  appId: '1:539224258375:web:9e66eb748e2c6298837e62',
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
