import React from "react";

//imports
import { useStyles } from "./styles";

const FormButton = (props) => {
  const classes = useStyles();

  return (
    <button type="submit" className={classes.button}>
      {props.children}
    </button>
  );
};

export default FormButton;
