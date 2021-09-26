import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbSHG3f7CpGgJLF9eotU5mKr0Mp94-L-k",
  authDomain: "helloworld-dfd61.firebaseapp.com",
  projectId: "helloworld-dfd61",
  storageBucket: "helloworld-dfd61.appspot.com",
  messagingSenderId: "712634070982",
  appId: "1:712634070982:web:b52750390ca696948ba4c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


