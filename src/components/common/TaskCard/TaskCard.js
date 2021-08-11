//dependencies
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { XCircle, ChevronRight, ChevronLeft } from "react-feather";

//actions
import { isMobile } from "actions/general";

//imports
import { useStyles } from "./styles";

const TaskCard = ({ task, index, deleteTask, droppableId, changeStatus }) => {
  const classes = useStyles();

  const success = "#25AD00";

  const icon = (task) => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {droppableId === "pending" && (
          <ChevronRight
            color={success}
            size={20}
            style={{ marginRight: "1rem" }}
            onClick={() => changeStatus("progress", task)}
            strokeWidth="2.5"
          />
        )}
        {droppableId === "progress" && (
          <>
            <ChevronLeft
              color="#FF3A3A"
              size={20}
              style={{ marginRight: "1rem" }}
              onClick={() => changeStatus("pending", task)}
              strokeWidth="2.5"
            />
            <ChevronRight
              color={success}
              size={20}
              style={{ marginRight: "1rem" }}
              onClick={() => changeStatus("completed", task)}
              strokeWidth="2.5"
            />
          </>
        )}
        {droppableId === "completed" && (
          <ChevronLeft
            color="#FF3A3A"
            size={20}
            style={{ marginRight: "1rem" }}
            onClick={() => changeStatus("progress", task)}
            strokeWidth="2.5"
          />
        )}
      </div>
    );
  };

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
              <p style={{ margin: "0", width: "70%" }}>{task.description}</p>
              {isMobile() && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {icon(task)}
                  <span {...provided.dragHandleProps}>
                    <div className={`${classes.dragHandle} ${classes.marginBottom}`} />
                    <div className={classes.dragHandle} />
                  </span>
                </div>
              )}
            </div>
          </li>
        ) : (
          <li
            className={classes.listItem}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={classes.iconContainer} onClick={() => deleteTask(task)}>
              <XCircle fill="#FF3A3A" color={"white"} size={22} />
            </div>
            <div className={classes.descriptionContainer}>{task.description}</div>
          </li>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;
