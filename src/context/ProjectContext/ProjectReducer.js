//imports
import { FETCH_USER_PROJECTS } from "../../actions/types";

const ProjectReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        projectsLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ProjectReducer;
