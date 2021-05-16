//dependencies
import React, { useContext } from "react";
import Draggable from "react-draggable";
import { ChevronsDown, ChevronsLeft } from "react-feather";

//context
import ProjectContext from "../../context/ProjectContext/ProjectContext";
import AppContext from "../../context/AppContext/AppContext";

//actions
import { isMobile } from "../../actions/general";

//imports
import { useStyles } from "./styles";
import "./styles.css";

const ProjectCard = ({ project }) => {
  const classes = useStyles();

  const { setProjectID } = useContext(ProjectContext);
  const { openModal, setModalView } = useContext(AppContext);

  //setting bounds for desktop and mobile

  //onStopHandler
  const onStophandler = async (e, pos) => {
    if ((isMobile() && pos?.lastX === -20) || pos.lastY === 20) {
      setModalView("ConfirmDeleteProject");
      setProjectID(project.docID);
      openModal();
      return;
    }
  };

  const mobileCard = (
    <div className={classes.cardContainer}>
      <div className={classes.textContainer}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <p className={classes.projectDescription}>{project.description}</p>
      </div>
      <div className="dragHandler">
        <ChevronsLeft
          className={classes.chevronLeft}
          size={25}
          color="#FF3636"
        />
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
        onStop={onStophandler}
        handle=".dragHandler"
      >
        {isMobile() ? mobileCard : desktopCard}
      </Draggable>
    </>
  );
};

export default ProjectCard;
