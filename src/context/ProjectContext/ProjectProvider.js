//dependencies
import { useReducer, useContext } from "react";

//actions
import {
	getMyProjects,
	deleteProject,
	getProjectById,
} from "../../actions/dbActions";

//imports
import initialState from "./state";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {
	FETCH_USER_PROJECTS,
	SET_PROJECT_ID,
	SET_PROJECT_DETAILS,
} from "../../actions/types";

export const ProjectProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ProjectReducer, initialState);

	//get logged in users projects
	const getUserProjects = async () => {
		const projects = await getMyProjects();
		dispatch({
			type: FETCH_USER_PROJECTS,
			payload: projects,
		});
	};

	const deleteUserProject = async docID => {
		deleteProject(docID);
		// setTimeout(async () => {
		//   getUserProjects();
		// }, 500);
	};

	const setProjectID = docID => {
		dispatch({
			type: SET_PROJECT_ID,
			payload: docID,
		});
	};

	const setProjectDetails = async docID => {
		const project = await getProjectById(docID);
		if (project?.id) {
			dispatch({ type: SET_PROJECT_DETAILS, payload: project });
		} else {
			throw Error;
		}
	};

	return (
		<ProjectContext.Provider
			value={{
				...state,
				getUserProjects,
				deleteUserProject,
				setProjectID,
				setProjectDetails,
			}}
		>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProject = () => {
	const context = useContext(ProjectContext);
	if (context === undefined) {
		throw new Error(`useProject must be used within a ProjectProvider`);
	}
	return context;
};
