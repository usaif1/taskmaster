//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const CentralHeading = ({ title, size = `3rem` }) => {
  const classes = useStyles(size);

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>{title}</h1>
    </div>
  );
};

export default CentralHeading;
