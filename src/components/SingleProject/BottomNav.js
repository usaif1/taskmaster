//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const BottomNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.bottomNavContainer}>
      <div className={classes.bottomNavWrapper}>
        <p className={`${classes.statusText} ${classes.textSize}`}>Pending</p>
        <p className={`${classes.statusText} ${classes.textSize}`}>In Progress</p>
        <p className={classes.textSize} style={{ margin: "0" }}>
          Completed
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
