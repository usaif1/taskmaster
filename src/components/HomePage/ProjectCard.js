//dependencies
import React, { useState } from "react";
import Draggable from "react-draggable";
//context
// import ProjectContext from "../../context/ProjectContext/ProjectContext";

//actions
import { isMobile } from "../../actions/general";

//imports
import { useStyles } from "./styles";
import "./styles.css";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  // const { deleteUserProject } = useContext(ProjectContext);

  //setting bounds for desktop and mobile

  //onStartHandler
  const onStartHandler = (e) => {
    // console.log(e);
  };

  //onStopHandler
  const onStophandler = async (e, pos) => {
    e.preventDefault();

    console.log("onStop -> ", pos.lastY);

    if (!pos.lastY) alert("not moved");

    if (isMobile()) return null;
  };

  const onTouchStartHandler = (e) => {
    console.log(e);
    console.log("touch start fired");
  };

  return (
    <Draggable
      axis={isMobile() ? "x" : "y"}
      bounds={{ top: -50, bottom: 50, left: -20, right: 20 }}
      grid={[50, -50]}
      // defaultPosition={{ x: 0, y: 0 }}
      position={{ x: 0, y: 0 }}
      positionOffset={{ x: 0, y: 0 }}
      onStop={onStophandler}
      onTouchStart={onTouchStartHandler}
    >
      <div
        className={classes.cardContainer}
        onTouchStart={() => {
          console.log("touch started");
        }}
      >
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p className={classes.projectDescription}>{project.description}</p>
      </div>
    </Draggable>
  );
};

export default ProjectCard;
