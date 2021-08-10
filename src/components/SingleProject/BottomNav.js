//dependencies
import React from "react";

//imports
import AddNewBtn from "./AddNewBtn";
import { useStyles } from "./styles";

const BottomNav = ({ setStatus, setOpen, open }) => {
  const classes = useStyles();

  const changeStatus = (status) => {
    setStatus(status);
  };

  const openInput = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className={`${classes.bottomNavContainer} ${open ? classes.hideBottomNav : classes.showBottomNav}`}>
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
      <AddNewBtn onClick={openInput} open={open} />
    </div>
  );
};

export default BottomNav;
