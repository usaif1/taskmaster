//dependencies
import React from "react";
import { ArrowRight } from "react-feather";

//actions

//context
// import AppContext from "../../context/AppContext";

//imports
import Container from "../common/Container/Container";
import CentralHeading from "../common/CentralHeading/CentralHeading";
import projects from "./dummyProjects";
import ProjectCard from "./ProjectCard";
import NewProjectCard from "./NewProjectCard";
import Modal from "../common/Modal/Modal";
import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();

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
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
      <Modal>Hello World</Modal>
    </Container>
  );
};

export default Home;
