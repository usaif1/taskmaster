//dependencies
import React from "react";
import { Colors } from "../../utils/Colors";

//imports
import OutlinedButton from "../common/OutlinedButton/OutlinedButton";
import { useStyles } from "./styles";

const AddNewProject = () => {
  const classes = useStyles();

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="projectTitle" className={classes.label}>
          Project Title
        </label>
        <input className={classes.input} type="text" name="projectTitle" />
        <label htmlFor="projectDescription" className={classes.label}>
          Project Description
        </label>
        <textarea
          className={classes.input}
          name="projectDescription"
          id=""
          rows="10"
        />
        <div className={classes.btnContainer}>
          <OutlinedButton style={{ ...styles.common, ...styles.cancel }}>
            Cancel
          </OutlinedButton>
          <div style={{ marginLeft: "1rem" }}>
            <OutlinedButton style={{ ...styles.common, ...styles.add }}>
              Add Project
            </OutlinedButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewProject;

//outlined button styles
const styles = {
  common: {
    position: "unset",
    fontSize: "1.6rem",
  },

  add: {
    color: `#51B800`,
    borderColor: `#51B800`,
    hover: {
      color: "white",
      background: `${Colors.bgGreen}`,
    },
  },

  cancel: {
    color: "#FF6666",
    borderColor: `#FF6666`,
    hover: {
      color: "white",
      background: `${Colors.bgRed}`,
    },
  },
};
