//dependencies
import React from "react";
import { Draggable } from "react-beautiful-dnd";

//actions
import { isMobile } from "actions/general";

//imports
import { useStyles } from "./styles";

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
            <span onClick={() => deleteTask(task)} style={{ color: "red" }}>
              &nbsp; delete
            </span>
            <span {...provided.dragHandleProps}>
              <div className={`${classes.dragHandle} ${classes.marginBottom}`} />
              <div className={classes.dragHandle} />
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
