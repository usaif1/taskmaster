import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaoOQDdXnWBXct6DD1GLFVKEd97-ezrIs",
  authDomain: "taskmaster-e85ef.firebaseapp.com",
  projectId: "taskmaster-e85ef",
  storageBucket: "taskmaster-e85ef.appspot.com",
  messagingSenderId: "346560588993",
  appId: "1:346560588993:web:9b404ec417f271a4b43840",
};

//initialize firebase
export const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);
};

//google auth provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
