//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const CentralHeading = ({ title, size = `3rem`, color = "#000000" }) => {
  const styles = {
    size,
    color,
  };
  const classes = useStyles(styles);
  return (
    <div style={{ width: "100vw" }}>
      <h1 className={classes.heading}>{title}</h1>
    </div>
  );
};

export default CentralHeading;
