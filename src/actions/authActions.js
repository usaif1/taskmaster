//dependencies
import firebase from "firebase/app";
import "firebase/auth";

//imports
import { googleProvider } from "../configs/firebase";
import { isMobile } from "./general";

//user signup - email & password
export const signup = async (email, password, setLoading) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      try {
        const newUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        console.log(newUser);
        localStorage.setItem("userId", newUser.user.uid);
        setLoading(true);
      } catch (err) {
        alert("Something went wrong!");
        return;
      }
    });
};

//get current user
export const getCurrentUser = (setLoading) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setLoading(true);
    } else {
      // No user is signed in.
      setLoading(false);
    }
  });
};

//check if user is signed in
export const isUserSignedIn = () => {
  const user = localStorage.getItem("userId");
  if (!user) {
    return false;
  }
  return true;
};

//google login
export const googleLogin = (setLoading) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      let user;
      if (isMobile()) {
        try {
          user = await firebase.auth().signInWithRedirect(googleProvider);
          console.log("mobile user -->", user);
        } catch (err) {
          alert("Something Went Wrong!");
        }
      } else {
        try {
          user = await firebase.auth().signInWithPopup(googleProvider);
        } catch (err) {
          alert("Something Went Wrong!");
        }
      }
      localStorage.setItem("userId", user.user.uid);
      setLoading(true);
    })
    .catch((err) => {
      alert("Something Went Wrong");
    });
};

//logout user
export const logout = (history) => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("signed out");
        localStorage.removeItem("userId");
        history.push("/login");
      })
      .catch((err) => {
        alert("not signed out.. some err");
        console.log(err);
      });
  } catch (error) {
    alert("error in trycatch block");
  }
};
