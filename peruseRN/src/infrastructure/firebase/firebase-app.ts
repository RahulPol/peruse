// Import the functions you need from the SDKs you need
import {
  FirebaseApp,
  FirebaseOptions,
  getApps,
  initializeApp,
} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCy_Ast4kGL65Sg4VBiS94AFShUxIVD9mY',
  authDomain: 'peruse-2f0ff.firebaseapp.com',
  projectId: 'peruse-2f0ff',
  storageBucket: 'peruse-2f0ff.appspot.com',
  messagingSenderId: '591688991483',
  appId: '1:591688991483:web:929c3e5af51badee69e65e',
};

let app: FirebaseApp = {} as FirebaseApp;

// Initialize Firebase
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export default app;
