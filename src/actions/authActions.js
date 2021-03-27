//dependencies
import firebase from "firebase/app";
import "firebase/auth";

//imports
import { googleProvider } from "../configs/firebase";
import { isMobile } from "./general";

//user signup - email & password
export const signup = async (email, password) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      try {
        const newUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        console.log(newUser);
      } catch (err) {
        alert("Something went wrong!");
        return;
      }
    });
};

//get current user
export const getCurrentUser = (history) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      history.push("/");
    } else {
      return false;
    }
  });
};

//google login
export const googleLogin = () => {
  try {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        let user;
        if (isMobile()) {
          user = await firebase.auth().signInWithRedirect(googleProvider);
        } else {
          user = await firebase.auth().signInWithPopup(googleProvider);
        }
        console.log("user --> ", user);
      })
      .catch((err) => {
        alert("Something Went Wrong Persistence");
        console.log("err code --> ", err.code);
        console.log("err msg -->", err.message);
      });
  } catch (err) {
    alert("Something Went Wrong!");
    console.log("err code --> ", err.code);
    console.log("err msg --> ", err.message);
  }
};
