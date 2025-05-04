import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCM25ktxZOzCrRu1y9ybfJOsfGx0FLyTQg",
  authDomain: "to-do-list-app-17069.firebaseapp.com",
  projectId: "to-do-list-app-17069",
  storageBucket: "to-do-list-app-17069.appspot.com",
  messagingSenderId: "106076608276",
  appId: "1:106076608276:web:5a2780f4f80cd355a95401"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, redirect to main app page
    window.location.href = 'index.html';
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.style.display = 'none';

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    loginError.textContent = error.message;
    loginError.style.display = 'block';
  }
});