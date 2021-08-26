//dependencies
import React from "react";
import Draggable from "react-draggable";
import { useHistory } from "react-router-dom";
import { ChevronsDown, ChevronsLeft } from "react-feather";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";
import { useApp } from "context/AppContext/AppProvider";

//actions
import { isMobile } from "actions/general";

//imports
import { useStyles } from "./styles";
import "./styles.css";

const ProjectCard = ({ project }) => {
  const { openModal, setModalView } = useApp();
  const { setProjectID } = useProject();
  const history = useHistory();

  const classes = useStyles();

  //setting bounds for desktop and mobile

  //onStopHandler
  const onStopHandler = (e, pos) => {
    e.stopPropagation();

    if ((isMobile() && pos?.lastX === -20) || pos.lastY === 20) {
      setModalView("ConfirmDeleteProject");
      setProjectID(project.docID);
      openModal();
      return;
    }
  };

  //onClickHandler
  const onClickHandler = (e) => {
    e.stopPropagation();
    history.push(`/project/${project.docID}`);
  };

  const mobileCard = (
    <div className={classes.cardContainer} onClick={onClickHandler}>
      <div className={classes.textContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p className={classes.projectDescription}>{project.description}</p>
      </div>
      <div className="dragHandler">
        <ChevronsLeft className={classes.chevronLeft} size={25} color="#FF3636" />
      </div>
    </div>
  );

  const desktopCard = (
    <div className={classes.cardContainer}>
      <div style={{ height: "80%" }} onClick={onClickHandler}>
        <div className={classes.textContainer}>
          <h2 className={classes.projectTitle}>{project.title}</h2>
          <p className={classes.projectDescription}>{project.description}</p>
        </div>
      </div>
      <div className="dragHandler">
        <ChevronsDown size={25} color="#FF3636" />
      </div>
    </div>
  );

  return (
    <>
      <Draggable
        axis={isMobile() ? "x" : "y"}
        bounds={{ bottom: 20, left: -20, top: 0, right: 0 }}
        grid={[20, -20]}
        position={{ x: 0, y: 0 }}
        positionOffset={{ x: 0, y: 0 }}
        onStop={onStopHandler}
        handle=".dragHandler"
      >
        {isMobile() ? mobileCard : desktopCard}
      </Draggable>
    </>
  );
};

export default ProjectCard;
