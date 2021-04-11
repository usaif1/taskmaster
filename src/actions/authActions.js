//dependencies
import firebase from "firebase/app";
import "firebase/auth";

//imports
import { googleProvider } from "../configs/firebase";

//actions
import { getNameFromEmail } from "./general";

//user signup - email & password
export const signup = (email, password, history, setLoading) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      try {
        const newUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);

        //update displayName as soon as user signs in
        await newUser.user.updateProfile({
          displayName: getNameFromEmail(email),
        });

        const user = {
          uid: newUser.user.uid,
          displayName: newUser.user.displayName,
        };

        localStorage.setItem("user", JSON.stringify(user));

        history.push("/");
      } catch (err) {
        debugger;
        console.log("err --> ", err);
        alert("Something went wrong!");
        setLoading(false);
        return;
      }
    });
};

//get current user
export const getCurrentUser = async () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
    } else {
      // No user is signed in.
      return null;
    }
  });
};

//check if user is signed in
export const isUserSignedIn = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return false;
  }
  return true;
};

//google login
export const googleLogin = (history, setLoading2) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(async () => {
      const user = await firebase.auth().signInWithPopup(googleProvider);

      const userDetails = {
        uid: user.user.uid,
        displayName: user.user.displayName,
      };

      localStorage.setItem("user", JSON.stringify(userDetails));
      history.push("/");
    })
    .catch((err) => {
      console.log("i'm the alert being triggered");
      console.log("err --> ", err.message);
      setLoading2(false);
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
      localStorage.removeItem("user");
      window.location.reload();
    })
    .catch((err) => {
      alert("not signed out.. some err");
      console.log(err);
    });
};
