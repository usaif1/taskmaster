//dependencies
import React, { useContext, useState } from "react";
import { Colors } from "../../utils/Colors";

//actions
import { addNewProject } from "../../actions/dbActions";
import AppContext from "../../context/AppContext/AppContext";

//imports
import OutlinedButton from "../common/OutlinedButton/OutlinedButton";
import { useStyles } from "./styles";

const AddNewProject = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const { closeModal, refreshPage } = useContext(AppContext);

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
        <label htmlFor="title" className={classes.label}>
          Project Title
        </label>
        <input
          className={classes.input}
          type="text"
          name="title"
          value={formData.title}
          onChange={onChangeHandler}
        />
        <label htmlFor="description" className={classes.label}>
          Project Description
        </label>
        <textarea
          className={classes.input}
          name="description"
          id=""
          rows="10"
          onChange={onChangeHandler}
        />
        <div className={classes.btnContainer}>
          <OutlinedButton
            style={{ ...styles.common, ...styles.cancel }}
            onClickHandler={cancelHandler}
          >
            Cancel
          </OutlinedButton>
          <div style={{ marginLeft: "1rem" }}>
            <OutlinedButton
              style={{ ...styles.common, ...styles.add }}
              onClickHandler={addProjectHandler}
            >
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
