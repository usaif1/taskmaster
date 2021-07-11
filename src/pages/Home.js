//dependencies
import React from "react";

//context
import { ProjectProvider } from "context/ProjectContext/ProjectProvider";

//actions
import { isUserSignedIn } from "actions/authActions";

//imports
import HomePage from "components/HomePage/HomePage";
import LandingPage from "components/LandingPage/LandingPage";

const Home = () => {
	return isUserSignedIn() ? (
		<ProjectProvider>
			<HomePage />
		</ProjectProvider>
	) : (
		<LandingPage />
	);
};

export default Home;
