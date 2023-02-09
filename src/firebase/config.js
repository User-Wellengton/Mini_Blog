
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// confidg retirada la do firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAVFdv5q0PcME3yvXnwMRhmeMcoMSi_uc4",
  authDomain: "miniblog-4149b.firebaseapp.com",
  projectId: "miniblog-4149b",
  storageBucket: "miniblog-4149b.appspot.com",
  messagingSenderId: "685150593103",
  appId: "1:685150593103:web:d78ecb4d9eb81f1f1d0a3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };