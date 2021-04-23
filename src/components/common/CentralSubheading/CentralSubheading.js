//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const CentralSubheading = ({ title, size = "2rem", color = "#000000" }) => {
  const styles = {
    size,
    color,
  };

  const classes = useStyles(styles);
  return <h3 className={classes.subheading}>{title}</h3>;
};

export default CentralSubheading;
