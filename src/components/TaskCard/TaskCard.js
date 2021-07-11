//dependencies
import React from "react";
import { createUseStyles } from "react-jss";

const TaskCard = () => {
  const classes = useStyles();

  return <div>this is a task card</div>;
};

export default TaskCard;

const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
  },

  "@media only screen and (max-width: 600px)": {},
});
