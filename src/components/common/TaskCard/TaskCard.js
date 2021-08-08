//dependencies
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { XCircle } from "react-feather";

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
            <div className={classes.iconContainer} onClick={() => deleteTask(task)}>
              <XCircle fill="#FF3A3A" color={"white"} size={22} />
            </div>
            <div className={classes.descriptionContainer}>
              {task.description}
              <span {...provided.dragHandleProps}>
                <div className={`${classes.dragHandle} ${classes.marginBottom}`} />
                <div className={classes.dragHandle} />
              </span>
            </div>
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
