//dependencies
import React from "react";
import { Frown } from "react-feather";

//imports
import { useStyles } from "./styles";

const NoProjectFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.noProjectContainer}>
      <Frown size={30} />
      <p>No projects found. Try adding one</p>
    </div>
  );
};

export default NoProjectFound;
