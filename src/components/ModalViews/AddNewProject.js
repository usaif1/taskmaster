//dependencies
import React, { useState } from "react";

//context
import { useApp } from "context/AppContext/AppProvider";

//actions
import { addNewProject } from "actions/dbActions";

//imports
import { OutlinedButton } from "components/common";
import { Colors } from "utils/Colors";
import { useStyles } from "./styles";

const AddNewProject = () => {
  const { closeModal, refreshPage } = useApp();

  const classes = useStyles();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  //onchange handler
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [`${e.target.name}`]: e.target.value });
  };

  //on add
  const addProjectHandler = (e) => {
    e.preventDefault();
    addNewProject(formData.title, formData.description);
    closeModal();
    refreshPage();
  };

  //on cancel
  const cancelHandler = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        {/* <label htmlFor="title" className={classes.label}>
          Project Title
        </label> */}
        <input
          className={classes.input}
          type="text"
          name="title"
          value={formData.title}
          onChange={onChangeHandler}
          autoComplete="off"
          placeholder="Add Project Title"
        />
        {/* <label htmlFor="description" className={classes.label}>
          Project Description
        </label> */}
        <textarea
          className={classes.textArea}
          name="description"
          id=""
          rows="10"
          onChange={onChangeHandler}
          placeholder="Add Project Description"
        />
        <div className={classes.btnContainer}>
          <OutlinedButton style={{ ...styles.common, ...styles.cancel }} onClickHandler={cancelHandler}>
            Cancel
          </OutlinedButton>
          <div style={{ marginLeft: "1rem" }}>
            <OutlinedButton style={{ ...styles.common, ...styles.add }} onClickHandler={addProjectHandler}>
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
    border: `#51B800`,
    hover: {
      color: "white",
      background: `${Colors.bgGreen}`,
    },
  },

  cancel: {
    color: "#FF6666",
    border: `#FF6666`,
    hover: {
      color: "white",
      background: `${Colors.bgRed}`,
    },
  },
};
