//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const AddNew = ({ onClick, open }) => {
  const classes = useStyles();

  return (
    <>
      <button
        className={`${classes.btnContainer} ${open ? classes.hideBottomNav : classes.showBottomNav}`}
        onClick={onClick}
      >
        <p className={classes.plus}>+</p>
      </button>
    </>
  );
};

export default AddNew;
