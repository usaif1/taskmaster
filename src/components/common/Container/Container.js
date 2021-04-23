//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const Container = (props) => {
  const classes = useStyles();

  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
