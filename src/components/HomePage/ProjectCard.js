//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <h2 className={classes.projectTitle}>{project.title}</h2>
      <p className={classes.projectDescription}>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
