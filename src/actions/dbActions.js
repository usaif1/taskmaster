//dependencies
import firebase from "firebase/app";
import "firebase/firestore";
import moment from "moment";
import { v4 as uuid } from "uuid";

//actions
import { capitalize } from "./general";

const token = JSON.parse(localStorage.getItem("user"));

//add new project
export const addNewProject = async (title, description) => {
  const db = firebase.firestore();
  try {
    const doc = await db
      .collection("projects")
      .doc(`p${uuid()}`)
      .set({
        title: capitalize(title),
        description: description,
        createdAt: moment().toISOString(),
        owner: token && token.uid,
      });
    console.log("doc --> ", doc);
  } catch (err) {
    alert("Something went wrong!");
    console.log("error --> ", err);
  }
};

//get projects
export const getMyProjects = async () => {
  const db = firebase.firestore();
  const docRef = db.collection("projects");
  console.log("token --> ", token.uid);
  try {
    const doc = await docRef.where("owner", "==", token.uid).get();

    doc.forEach((doc) => console.log(doc.data()));

    if (doc.exists) {
      console.log("doc exists --> ", doc);
    } else {
      console.log("no such data");
    }
  } catch (err) {
    console.log("err fetching data --> ", err);
    alert("Error fetching projects");
  }
};
