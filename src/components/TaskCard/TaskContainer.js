//dependencies
import React from "react";
import { Droppable } from "react-beautiful-dnd";

//imports
import TaskCard from "components/common/TaskCard/TaskCard";
import { useStyles } from "./styles";

const TaskContainer = ({ title, droppableId, tasks, setTasks, droppableId2, getTasksByStatus }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} onDragOver={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()}>
      <div
        className={classes.headingContainer}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
      >
        <h3>{title}</h3>
      </div>
      <div>
        <Droppable droppableId={droppableId}>
          {(provided) => {
            return (
              <ul
                style={{ padding: "10px", border: "1px solid red" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks[droppableId].map((task, index) => {
                  return <TaskCard key={index} task={task} index={index} />;
                })}
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};

export default TaskContainer;
