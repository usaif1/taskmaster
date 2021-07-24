//dependencies
import React from "react";

//actions
import { deleteProject } from "actions/dbActions";

//context
import { useApp } from "context/AppContext/AppProvider";
import { useProject } from "context/ProjectContext/ProjectProvider";

//imports
import { OutlinedButton } from "components/common";
import { useStyles } from "./styles";
import { Colors } from "utils/Colors";

const Confirm = (props) => {
  const { closeModal, refreshPage } = useApp();
  const { projectId } = useProject();

  const classes = useStyles();

  const deleteHandler = () => {
    deleteProject(projectId);
    closeModal();
    setTimeout(() => {
      refreshPage();
    }, 500);
  };

  const cancelHandler = () => {
    closeModal();
  };

  return (
    <div>
      <p className={classes.confirmText}>{props.text}</p>
      <div className={classes.btnContainer} style={{ justifyContent: "center" }}>
        <OutlinedButton style={{ ...styles.common, ...styles.cancel }} onClickHandler={cancelHandler}>
          Cancel
        </OutlinedButton>
        <div style={{ marginLeft: "1rem" }}>
          <OutlinedButton style={{ ...styles.common, ...styles.delete }} onClickHandler={deleteHandler}>
            Delete
          </OutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

const styles = {
  common: {
    position: "unset",
    fontSize: "1.6rem",
  },

  delete: {
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
    marginRight: "1rem",
    hover: {
      color: "white",
      background: `${Colors.bgRed}`,
    },
  },
};
