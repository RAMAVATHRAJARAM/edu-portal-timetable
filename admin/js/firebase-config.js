const firebaseConfig = {
  apiKey: "AIzaSyADoO7moODr2gVW2Z4vyZigddNpvDy1mfs",
  authDomain: "timetable-803c6.firebaseapp.com",
  databaseURL: "https://timetable-803c6-default-rtdb.firebaseio.com",
  projectId: "timetable-803c6",
  storageBucket: "timetable-803c6.appspot.com",
  messagingSenderId: "295725511601",
  appId: "1:295725511601:web:7e3c3794d53a70e10c4390",
  measurementId: "G-66HS0SR1LB"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

