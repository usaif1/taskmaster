//dependencies
import React from "react";

//imports
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
      </form>
    </div>
  );
};

export default AddNewProject;
