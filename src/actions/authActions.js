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
        const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);

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
        alert("Something went wrong!");
        setLoading(false);
        return;
      }
    })
    .catch((err) => {
      return alert("Internal Server Error!");
    });
};

//user sign in - email & password
export const signIn = (email, password, history, setLoading) => {
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          const user = {
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
          };
          localStorage.setItem("user", JSON.stringify(user));

          history.push("/");
        })
        .catch((err) => {
          alert("Invalid Credentials!");
          setLoading(false);
        });
    })
    .catch((err) => {
      return alert("Internal Server Error!");
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
      setLoading2(false);
      alert("Something Went Wrong");
    });
};

//logout user
export const logout = (history) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("signed out");
      localStorage.removeItem("user");
      history.push("/");
      window.location.reload();
    })
    .catch((err) => {
      alert("not signed out.. some err");
      console.log(err);
    });
};
