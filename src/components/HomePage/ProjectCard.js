//dependencies
import React from "react";
import Draggable from "react-draggable";

//imports
import { useStyles } from "./styles";
import "./styles.css";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  //onStopHandler
  const onStophandler = (position) => {};

  return (
    <Draggable
      axis="y"
      bounds={{ bottom: 30, top: -30 }}
      grid={[50, -50]}
      onStop={onStophandler}
      defaultPosition={{ x: 0, y: 0 }}
      position={{ x: 0, y: 0 }}
    >
      <div className={classes.cardContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p className={classes.projectDescription}>{project.description}</p>
      </div>
    </Draggable>
  );
};

export default ProjectCard;
