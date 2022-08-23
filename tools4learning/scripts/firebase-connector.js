
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCEmGyTjzIqXMmOp05mHC-VLi0UeNh4Nw0",
    authDomain: "tools4learning-d30bb.firebaseapp.com",
    projectId: "tools4learning-d30bb",
    storageBucket: "tools4learning-d30bb.appspot.com",
    messagingSenderId: "609058748443",
    appId: "1:609058748443:web:2ff009e342f835476920be",
    measurementId: "G-EYMVVB95K5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

