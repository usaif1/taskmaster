//dependencies
import React from "react";

//imports
import { useStyles } from "./styles";

const BottomNav = ({ setStatus }) => {
  const classes = useStyles();

  const changeStatus = (status) => {
    setStatus(status);
  };

  return (
    <div className={classes.bottomNavContainer}>
      <div className={classes.bottomNavWrapper}>
        <p
          onClick={() => changeStatus("pending")}
          className={`${classes.statusText} ${classes.textSize} ${classes.noSelect}`}
        >
          Pending
        </p>
        <p
          onClick={() => changeStatus("progress")}
          className={`${classes.statusText} ${classes.textSize} ${classes.noSelect}`}
        >
          In Progress
        </p>
        <p
          onClick={() => changeStatus("completed")}
          className={`${classes.textSize} ${classes.noSelect}`}
          style={{ margin: "0" }}
        >
          Completed
        </p>
      </div>
    </div>
  );
};

export default BottomNav;
