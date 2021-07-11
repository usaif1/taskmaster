//imports
import {
	FETCH_USER_PROJECTS,
	SET_PROJECT_ID,
	SET_PROJECT_DETAILS,
} from "../../actions/types";

const ProjectReducer = (state, action) => {
	switch (action.type) {
		case FETCH_USER_PROJECTS:
			return {
				...state,
				projects: action.payload,
				projectsLoading: false,
			};

		case SET_PROJECT_ID:
			return {
				...state,
				projectId: action.payload,
			};

		case SET_PROJECT_DETAILS:
			return {
				...state,
				projectDetails: action.payload,
				projectDetailsLoading: false,
			};

		default:
			return {
				...state,
			};
	}
};

export default ProjectReducer;
