//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const AddNew = () => {
  const classes = useStyles();

  return (
    <button className={classes.btnContainer}>
      <p className={classes.plus}>+</p>
    </button>
  );
};

export default AddNew;
