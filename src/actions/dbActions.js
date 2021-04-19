//dependencies
import firebase from "firebase/app";
import "firebase/firestore";
import moment from "moment";

const token = JSON.parse(localStorage.getItem("user"));

//add new project
export const addNewProject = async () => {
  const db = firebase.firestore();
  try {
    const doc = await db
      .collection("projects")
      .doc("second")
      .set({
        title: "second project",
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
  const docRef = db.collection("projects").doc("first");
  try {
    const doc = await docRef.get();
    if (doc.exists) {
      console.log("doc exists --> ", doc.data());
    } else {
      console.log("no such data");
    }
  } catch (err) {
    console.log("err fetching data --> ", err);
    alert("Error fetching projects");
  }
};
