//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";
import { Colors } from "utils/Colors";

const TaskHeading = ({ title }) => {
  let bg = Colors.darkRedGrad;

  switch (title) {
    case "Pending":
      break;

    case "In Progress":
      bg = Colors.yellowGrad;
      break;

    case "Completed":
      bg = Colors.greenGrad;
      break;

    default:
      break;
  }

  const classes = useStyles(bg);
  return <h3 className={classes.heading}>{title}</h3>;
};

export default TaskHeading;
