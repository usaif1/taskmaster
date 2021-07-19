//dependencies
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { createUseStyles } from "react-jss";

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
        return (
          <li
            className={classes.listItem}
            style={{ padding: "1rem" }}
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
    padding: "1rem",
  },
});
