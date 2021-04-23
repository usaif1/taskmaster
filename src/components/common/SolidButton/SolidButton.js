//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const SolidButton = (props) => {
  const classes = useStyles(props.styles);

  return (
    <button onClick={props.onClickHandler} className={classes.button}>
      {props.children}
    </button>
  );
};

export default SolidButton;
