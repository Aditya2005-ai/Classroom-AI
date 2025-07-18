// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD_IAWIY058J-VYRZX2U4AE1H2XZQ-6gV4",
  authDomain: "classroomai-20.firebaseapp.com",
  projectId: "classroomai-20",
  storageBucket: "classroomai-20.firebasestorage.app",
  messagingSenderId: "9778016549",
  appId: "1:9778016549:web:c8325a2404ef6966012acc",
  measurementId: "G-BD49V29EWR"
};

// ✅ Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Google Sign-In Function
window.googleSignIn = function () {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      setTimeout(() => location.reload(), 500);
    })
    .catch((error) => {
      console.error(error.message);
      setTimeout(() => location.reload(), 500);
    });
};

// ✅ Sign Up Function
window.signUpWithEmail = function (name, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setTimeout(() => location.reload(), 500);
    })
    .catch((error) => {
      console.error(error.message);
      setTimeout(() => location.reload(), 500);
    });
};

// ✅ Login Function
window.loginWithEmail = function (email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setTimeout(() => location.reload(), 500);
    })
    .catch((error) => {
      console.error(error.message);
      setTimeout(() => location.reload(), 500);
    });
};

// ✅ Logout Function
window.logoutUser = function () {
  signOut(auth).then(() => {
    setTimeout(() => location.reload(), 500);
  });
};


// ✅ Update UI on login state
onAuthStateChanged(auth, (user) => {
  const authText = document.getElementById("authText");
  const avatarImg = document.getElementById("userAvatar");
  const profileAvatar = document.getElementById("profileAvatar");
  const dropdownAvatar = document.getElementById("dropdownAvatar");
  const nameElement = document.getElementById("userName");
  const emailElement = document.getElementById("userEmail");
  const infoBlock = document.getElementById("userInfo");
  const dropdownName = document.querySelector("#dropdownMenu p");

  if (user) {
    // Show profile UI
    if (authText) authText.style.display = "none";
    if (avatarImg) {
      avatarImg.src = user.photoURL || "user.png";
      avatarImg.style.display = "block";
    }
    if (profileAvatar) profileAvatar.style.display = "block";
    if (dropdownAvatar) dropdownAvatar.src = user.photoURL || "user.png";

    if (nameElement) nameElement.textContent = user.displayName || "No Name";
    if (emailElement) emailElement.textContent = user.email || "No Email";
    if (infoBlock) infoBlock.style.display = "block";
    if (dropdownName) dropdownName.textContent = user.displayName || user.email;

    // ✅ Backend call on login
    fetch("https://classroom-ai.onrender.com/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, name: user.displayName })
    })
    .then(res => res.json())
    .then(data => console.log("Backend says:", data.message))
    .catch(err => console.error("Backend error:", err));
  } else {
    // Show login button, hide user info
    if (authText) authText.style.display = "block";
    if (profileAvatar) profileAvatar.style.display = "none";
    if (avatarImg) avatarImg.style.display = "none";
    if (dropdownAvatar) dropdownAvatar.style.display = "none";
    if (infoBlock) infoBlock.style.display = "none";
  }
});

export { app };
