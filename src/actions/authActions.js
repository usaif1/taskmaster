//dependencies
import firebase from "firebase/app";
import "firebase/auth";

//set persistence

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
