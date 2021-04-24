//dependencies
import React, { useEffect, useContext } from "react";
import { ArrowRight } from "react-feather";

//actions
// import { isUserSignedIn } from "../../actions/authActions";

//context
import ProjectContext from "../../context/ProjectContext/ProjectContext";
import AppContext from "../../context/AppContext/AppContext";

//imports
import Container from "../common/Container/Container";
import CentralHeading from "../common/CentralHeading/CentralHeading";
// import projects from "./dummyProjects";
import ProjectCard from "./ProjectCard";
import NewProjectCard from "./NewProjectCard";
import Modal from "../common/Modal/Modal";
import AddNewProject from "../ModalViews/AddNewProject";
import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();

  const { projects, getUserProjects } = useContext(ProjectContext);
  const { refresh } = useContext(AppContext);

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
      <div className={classes.listContainer}>
        <NewProjectCard />
        {projects &&
          projects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
      </div>
      <Modal>
        <AddNewProject />
      </Modal>
    </Container>
  );
};

export default Home;
