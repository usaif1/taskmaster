//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const CentralSubheading = ({ title, size = "2rem" }) => {
  const classes = useStyles(size);
  return <h3 className={classes.subheading}>{title}</h3>;
};

export default CentralSubheading;
