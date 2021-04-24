//dependencies
import { useReducer } from "react";

//actions
import { getMyProjects } from "../../actions/dbActions";

//imports
import initialState from "./state";
import ProjectContext from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import { FETCH_USER_PROJECTS } from "../../actions/types";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  //get logged in users projects
  const getUserProjects = async () => {
    const projects = await getMyProjects();
    dispatch({
      type: FETCH_USER_PROJECTS,
      payload: projects,
    });
  };

  return (
    <ProjectContext.Provider value={{ ...state, getUserProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default AppProvider;
