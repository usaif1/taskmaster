//dependencies
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { createUseStyles } from "react-jss";

//actions
import { isMobile } from "actions/general";

//imports

const TaskCard = ({ task, index, deleteTask }) => {
  const classes = useStyles();

  return (
    <Draggable
      draggableId={task.id}
      index={index}
      key={task.id} // key is required else won't work
    >
      {(provided) => {
        return isMobile() ? (
          <li className={classes.listItem} ref={provided.innerRef} {...provided.draggableProps}>
            {task.description}
            <span onClick={() => deleteTask(index, task)} style={{ color: "red" }}>
              &nbsp; delete
            </span>
            <span style={{ border: "1px solid yellow", padding: "1rem" }} {...provided.dragHandleProps}>
              {" "}
              drag{" "}
            </span>
          </li>
        ) : (
          <li
            className={classes.listItem}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task.description}
            <span onClick={() => deleteTask(index, task)} style={{ color: "red" }}>
              &nbsp; delete
            </span>
          </li>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;

const useStyles = createUseStyles({
  listItem: {
    padding: "2rem",
    // top: "10px !important",
    top: "auto !important",
    marginTop: "2rem",
    border: "1px solid red",
    display: "flex",
    justifyContent: "space-between",
  },
});
