import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyB4hAAr65GbpnumwePwNyjs0k4d28sNtww",
  authDomain: "onucrom.firebaseapp.com",
  projectId: "onucrom",
  databaseURL: "https://onucrom-default-rtdb.firebaseio.com",
  storageBucket: "onucrom.appspot.com",
  messagingSenderId: "360008232516",
  appId: "1:360008232516:web:a624c77c78979976271611",
  measurementId: "G-KNBWNF1NG7",
};

function initFireBase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

initFireBase();
export { firebase };
