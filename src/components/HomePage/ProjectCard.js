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
  const [position, setPosition] = useState({
    x: "",
    y: "",
  });

  // const { deleteUserProject } = useContext(ProjectContext);

  //setting bounds for desktop and mobile
  const bounds = isMobile()
    ? {
        left: -20,
        right: 20,
      }
    : {
        bottom: 30,
        top: -30,
      };

  //onStartHadnler
  const onStartHandler = (e, pos) => {
    setPosition({
      x: pos.x,
      y: pos.y,
    });
  };

  //onStopHandler
  const onStophandler = async (e, pos) => {
    if (position.x === pos.x || pos.y === position.y) return;

    console.log("x and y", position.x, position.y);

    console.log(pos.x);
    console.log(pos.y);

    alert("gonna delete project");
    // await deleteUserProject(project.docID);
  };

  return (
    <Draggable
      axis={isMobile() ? "x" : "y"}
      // bounds={{ bottom: 30, top: -30 }}
      bounds={bounds}
      grid={[50, -50]}
      onStop={onStophandler}
      onStart={onStartHandler}
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
