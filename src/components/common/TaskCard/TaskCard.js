//dependencies
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { createUseStyles } from "react-jss";

//imports

const TaskCard = ({ task, index }) => {
  const classes = useStyles();

  // console.log(task);

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => {
        // console.log("dragHandle", provided.dragHandleProps);
        // console.log("draggable", provided.draggableProps);
        // console.log(provided.innerRef);
        return (
          <li
            className={classes.listItem}
            style={{ padding: "1rem" }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task.text}
            {/* asd */}
          </li>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;

const useStyles = createUseStyles({
  listItem: {
    padding: "1rem",
  },
});
