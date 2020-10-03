import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNtrG1BvjhQS6IecXpA2yLf_wdVPMTry8',
  authDomain: 'crown-project-822e2.firebaseapp.com',
  databaseURL: 'https://crown-project-822e2.firebaseio.com',
  projectId: 'crown-project-822e2',
  storageBucket: 'crown-project-822e2.appspot.com',
  messagingSenderId: '383214394371',
  appId: '1:383214394371:web:8cef481d359c277e26c236',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
