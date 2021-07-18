//dependencies
import firebase from "firebase/app";
import "firebase/firestore";
import moment from "moment";
import { v4 as uuid } from "uuid";

//actions
import { capitalize } from "./general";

//add new project
export const addNewProject = async (title, description) => {
  const token = JSON.parse(localStorage.getItem("user"));
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
        tasks: {
          pending: [],
          progress: [],
          completed: [],
        },
      });
  } catch (err) {
    alert("Something went wrong!");
  }
};

//get all projects
export const getMyProjects = async () => {
  const db = firebase.firestore();
  const docRef = db.collection("projects");
  let projects = [];
  try {
    const doc = await docRef
      .where("owner", "==", JSON.parse(localStorage.getItem("user")).uid)
      .orderBy("createdAt", "desc")
      .get();
    if (doc.empty) {
      return [];
    }
    doc.forEach((doc) => {
      projects.push({
        docID: doc.id,
        ...doc.data(),
      });
    });
    return projects;
  } catch (err) {
    alert("Error fetching projects");
    console.log("err fetching projects --> ", err);
  }
};

//get single project
export const getProjectById = async (pid) => {
  const db = firebase.firestore();
  const docRef = db.collection("projects");
  try {
    const doc = await docRef.doc(`${pid}`).get();
    if (doc.exists) {
      return doc.data();
    } else {
      return alert("No Project Found!");
    }
  } catch (err) {
    alert("Error fetching project");
    console.log("err fetching single project --> ", err);
  }
};

// delete a project
export const deleteProject = (docID) => {
  const db = firebase.firestore();
  const docRef = db.collection("projects");
  docRef
    .doc(docID)
    .delete()
    .then(() => {})
    .catch((err) => {
      alert("Error Deleting Project");
    });
};

/* TASKS */

//add new task
export const addTask = (description, docID) => {
  const db = firebase.firestore();
  const docRef = db.collection("projects").doc(`${docID}`);

  const newTask = {
    id: `t${uuid()}`,
    createdAt: moment().toISOString(),
    description: description,
  };

  docRef
    .update({
      "tasks.pending": firebase.firestore.FieldValue.arrayUnion(newTask),
    })
    .then(() => {
      return null;
    })
    .catch((err) => {
      alert("Something Went Wrong!");
      console.log(err);
    });

  return newTask;
};

// save single reordered list
export const updateSingleList = (droppableId, items, docID) => {
  const db = firebase.firestore();
  const docRef = db.collection("projects").doc(`${docID}`);

  docRef
    .update({
      [`tasks.${droppableId}`]: items,
    })
    .then(() => {
      return null;
    })
    .catch((err) => {
      console.log("Error Updating", err);
    });
};

//save multiple reordered lists
export const updateMultiLists = (sourceId, sourceItems, destinationId, destinationItems, docID) => {
  const db = firebase.firestore();
  const docRef = db.collection("projects").doc(`${docID}`);

  docRef
    .update({
      [`tasks.${sourceId}`]: sourceItems,
      [`tasks.${destinationId}`]: destinationItems,
    })
    .then(() => {
      return null;
    })
    .catch((err) => {
      console.log("Error Updating", err);
    });
};
