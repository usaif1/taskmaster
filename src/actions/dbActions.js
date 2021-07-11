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
		doc.forEach(doc => {
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
export const getProjectById = async pid => {
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
export const deleteProject = docID => {
	const db = firebase.firestore();
	const docRef = db.collection("projects");
	docRef
		.doc(docID)
		.delete()
		.then(() => {})
		.catch(err => {
			alert("Error Deleting Project");
		});
};
