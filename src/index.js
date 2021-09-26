import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/compat/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBzoZ2KetMByRQ-F1xAl-RtfHkjnAHfw_g",
//   authDomain: "fir-db-for-spring-boot-30cac.firebaseapp.com",
//   projectId: "fir-db-for-spring-boot-30cac",
//   storageBucket: "fir-db-for-spring-boot-30cac.appspot.com",
//   messagingSenderId: "921032801974",
//   appId: "1:921032801974:web:4cec6b4d8f47c03bf1b017",
//   measurementId: "G-SHJ62VWKCH"
// };

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// console.log(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


