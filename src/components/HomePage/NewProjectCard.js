//dependencies
import React from "react";
import { Plus } from "react-feather";

//imports
import { useStyles } from "./styles";

const NewProjectCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div className={classes.addNew}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Plus style={{ position: "relative" }} />
          <p className={classes.projectDescription}>Add New Project</p>
        </div>
      </div>
    </div>
  );
};

export default NewProjectCard;
