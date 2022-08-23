<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDe0dsXJkiCPZsNihE3p_5sU7Mc9PCvYsQ",
    authDomain: "learningdatabase-f4bb0.firebaseapp.com",
    databaseURL: "https://learningdatabase-f4bb0-default-rtdb.firebaseio.com",
    projectId: "learningdatabase-f4bb0",
    storageBucket: "learningdatabase-f4bb0.appspot.com",
    messagingSenderId: "266285362578",
    appId: "1:266285362578:web:54c32e75e84a064222654b",
    measurementId: "G-60LK8HT0L2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
