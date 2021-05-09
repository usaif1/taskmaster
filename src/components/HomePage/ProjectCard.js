//dependencies
import React from "react";
import Draggable from "react-draggable";
import { ChevronsDown, ChevronsLeft } from "react-feather";

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

  // console.log(classes.dragHandle);

  //setting bounds for desktop and mobile

  //onStartHandler
  // const onStartHandler = (e) => {
  //   // console.log(e);
  // };

  //onStopHandler
  const onStophandler = async (e, pos) => {
    e.preventDefault();

    console.log("onStop -> ", pos.lastY);
  };

  const mobileCard = (
    <div className={classes.cardContainer}>
      <div className={classes.textContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p className={classes.projectDescription}>{project.description}</p>
      </div>
      <div className="dragHandler">
        <ChevronsLeft className={classes.chevronLeft} size={30} />
      </div>
    </div>
  );

  const desktopCard = (
    <div className={classes.cardContainer}>
      <div className={classes.textContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p className={classes.projectDescription}>{project.description}</p>
      </div>
      <div className="dragHandler">
        <ChevronsDown size={30} />
      </div>
    </div>
  );

  return (
    <Draggable
      axis={isMobile() ? "x" : "y"}
      bounds={{ top: -50, bottom: 50, left: -20, right: 20 }}
      grid={[50, -50]}
      position={{ x: 0, y: 0 }}
      positionOffset={{ x: 0, y: 0 }}
      onStop={onStophandler}
      handle=".dragHandler"
    >
      {isMobile() ? mobileCard : desktopCard}
    </Draggable>
  );
};

export default ProjectCard;
