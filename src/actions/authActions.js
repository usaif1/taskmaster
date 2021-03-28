//dependencies
import firebase from "firebase/app";
import "firebase/auth";

//imports
import { googleProvider } from "../configs/firebase";
// import { isMobile } from "./general";

//user signup - email & password
export const signup = async (email, password, history) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      try {
        const newUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        history.push("/");
        localStorage.setItem("userId", newUser.user.uid);
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
export const googleLogin = (history) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      const user = await firebase.auth().signInWithPopup(googleProvider);
      localStorage.setItem("userId", user.user.uid);
      history.push("/");
    })
    .catch((err) => {
      alert("Something Went Wrong");
    });
};

//logout user
export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("signed out");
      localStorage.removeItem("userId");
    })
    .catch((err) => {
      alert("not signed out.. some err");
      console.log(err);
    });
};
