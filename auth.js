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
  if (user) {
    document.getElementById("authText").style.display = "none";
    document.getElementById("profileAvatar").style.display = "block";
    document.getElementById("dropdownAvatar").src = user.photoURL || "user.png";
    const nameElement = document.querySelector("#dropdownMenu p");
    if (nameElement) {
      nameElement.textContent = user.displayName || user.email;
    }
  } else {
    document.getElementById("authText").style.display = "block";
    document.getElementById("profileAvatar").style.display = "none";
  }
});

export { app };
