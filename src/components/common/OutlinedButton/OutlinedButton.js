//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const OutlinedButton = (props) => {
  const classes = useStyles(props.style);

  return (
    <button onClick={props.onClickHandler} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default OutlinedButton;
