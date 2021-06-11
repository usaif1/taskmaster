//dependencies
import React from "react";

//context
import { ProjectProvider } from "context/ProjectContext/ProjectProvider";

//imports
import SingleProject from "components/SingleProject/SingleProject";

const Project = () => {
	return (
		<ProjectProvider>
			<SingleProject />
		</ProjectProvider>
	);
};

export default Project;
