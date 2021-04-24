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
    await db
      .collection("projects")
      .doc(`p${uuid()}`)
      .set({
        id: `pid${uuid()}`,
        title: capitalize(title),
        description: description,
        createdAt: moment().toISOString(),
        owner: token && token.uid,
      });
  } catch (err) {
    alert("Something went wrong!");
  }
};

//get projects
export const getMyProjects = async () => {
  const db = firebase.firestore();
  const docRef = db.collection("projects");
  let projects = [];
  try {
    const doc = await docRef
      .where("owner", "==", token.uid)
      .orderBy("createdAt", "desc")
      .get();
    if (doc.empty) {
      return [];
    }
    doc.forEach((doc) => projects.push(doc.data()));
    return projects;
  } catch (err) {
    alert("Error fetching projects");
  }
};
