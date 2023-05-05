// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {databaseURL: "https://regal-cider-353012-default-rtdb.asia-southeast1.firebasedatabase.app"}
//   apiKey: "AIzaSyBszCHEz1MUtnC4k6E3-AP6mgC2I9DM5xk",
//   authDomain: "regal-cider-353012.firebaseapp.com",
//   projectId: "regal-cider-353012",
//   storageBucket: "regal-cider-353012.appspot.com",
//   messagingSenderId: "1033711011401",
//   appId: "1:1033711011401:web:bd84bb3ee7555cde9e6198",
//   measurementId: "G-D1T5BPV1T1"


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app)
const inputDB = ref(database, "follow")

const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const textField = document.getElementById("pesan")
const addBtn = document.getElementById("btn")

addBtn.addEventListener("click", function() {
    let inputValueName = inputName.value,
    let inputValueEmail = inputEmail.value,
    let inpuValueText = textField.value

    push(inputDB, inputValueName, inputValueEmail, inpuValueText)
    // console.log(inputValueName, inputValueEmail, inpuValueText)
})