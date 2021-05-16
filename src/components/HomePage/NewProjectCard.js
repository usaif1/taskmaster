//dependencies
import React, { useContext } from "react";
import { Plus } from "react-feather";

//context
import AppContext from "../../context/AppContext/AppContext";

//imports
import { useStyles } from "./styles";

const NewProjectCard = () => {
  const classes = useStyles();

  const { openModal, setModalView } = useContext(AppContext);

  return (
    <div
      className={`${classes.cardContainer} ${classes.noGrabbing}`}
      onClick={() => {
        setModalView("AddNewProject");
        openModal();
      }}
    >
      <div className={classes.addNew}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Plus />
          <p className={classes.projectDescription}>Add New Project</p>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
