//dependencies
import React from "react";
import { ArrowRight } from "react-feather";

//actions

//imports
import Container from "../common/Container/Container";
import CentralHeading from "../common/CentralHeading/CentralHeading";
import projects from "./dummyProjects";
import { useStyles } from "./styles";
import ProjectCard from "./ProjectCard";
import NewProjectCard from "./NewProjectCard";

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
    </Container>
  );
};

export default Home;
