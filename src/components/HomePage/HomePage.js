//dependencies
import React, { useEffect, useContext } from "react";
import { ArrowRight } from "react-feather";
import ScaleLoader from "react-spinners/ScaleLoader";

//context
import ProjectContext from "context/ProjectContext/ProjectContext";
import AppContext from "context/AppContext/AppContext";

//imports
import Confirm from "../ModalViews/Confirm";
import Container from "../common/Container/Container";
import CentralHeading from "../common/CentralHeading/CentralHeading";
import ProjectCard from "./ProjectCard";
import NewProjectCard from "./NewProjectCard";
import Modal from "../common/Modal/Modal";
import AddNewProject from "../ModalViews/AddNewProject";
import { useStyles } from "./styles";

const Home = () => {
	const classes = useStyles();

	const { projects, getUserProjects, projectsLoading } =
		useContext(ProjectContext);
	const { refresh, modalView } = useContext(AppContext);

	useEffect(() => {
		getUserProjects();
		//eslint-disable-next-line
	}, [refresh]);

	return (
		<Container>
			<CentralHeading
				title={`Welcome  ${
					JSON.parse(localStorage.getItem("user")).displayName
				}`}
			/>
			<div className={classes.titleContainer}>
				<p className={classes.title}>Your Projects</p>
				<ArrowRight className={classes.icon} size={30} />
			</div>
			<div className={classes.listContainer} style={{ overflow: "visible" }}>
				<NewProjectCard />
				{!projectsLoading ? (
					projects.map(project => {
						return <ProjectCard project={project} key={project.id} />;
					})
				) : (
					<div className={classes.scaleLoaderContainer}>
						<ScaleLoader color="#000000" height={20} />
					</div>
				)}
			</div>
			{!projects.length && !projectsLoading && (
				<p>No projects found. Try adding one</p>
			)}
			<>
				<Modal>
					{modalView === "AddNewProject" ? <AddNewProject /> : null}
					{modalView === "ConfirmDeleteProject" ? (
						<Confirm text={"Are you sure you want to delete this project?"} />
					) : null}
				</Modal>
			</>
		</Container>
	);
};

export default Home;
