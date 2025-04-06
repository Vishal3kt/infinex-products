import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqqKnbc63Sln2MJ_r0Qcg7k2bUtL7gpL8",
  authDomain: "infinex-products.firebaseapp.com",
  databaseURL: "https://infinex-products-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "infinex-products",
  storageBucket: "infinex-products.appspot.com",
  messagingSenderId: "961509109890",
  appId: "1:961509109890:web:1865bd4154cd84c68ac49b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth };
export default app;
