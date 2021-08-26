//dependencies
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";

//actions
import { updateSingleList, updateMultiLists } from "actions/dbActions";

//imports
import TaskCard from "components/common/TaskCard/TaskCard";
import TaskHeading from "./TaskHeading";
import { useStyles } from "./styles";

const TaskContainer = ({ title, droppableId, tasks, setTasks }) => {
  const classes = useStyles();
  const { id } = useParams();

  const deleteTask = (selectedTask) => {
    const newArr = tasks[`${droppableId}`].filter((task) => {
      return task.id !== selectedTask.id;
    });

    setTasks({
      ...tasks,
      [`${droppableId}`]: newArr,
    });

    updateSingleList(droppableId, newArr, id);
  };

  const changeStatus = (destinationId, selectedTask) => {
    const newSourceArr = tasks[`${droppableId}`].filter((task) => {
      return task.id !== selectedTask.id;
    });

    const newDestArray = Array.from(tasks[`${destinationId}`]);
    newDestArray.unshift(selectedTask);

    setTasks({
      ...tasks,
      [`${droppableId}`]: newSourceArr,
      [`${destinationId}`]: newDestArray,
    });

    updateMultiLists(droppableId, newSourceArr, destinationId, newDestArray, id);
  };

  return (
    <div className={classes.wrapper}>
      <TaskHeading title={title} />
      <div className={classes.container} onDragOver={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()}>
        <Droppable droppableId={droppableId}>
          {(provided) => {
            return (
              <div className={classes.listContainer}>
                <ul className={classes.ul} {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks[droppableId].map((task, index) => {
                    return (
                      <TaskCard
                        key={index}
                        task={task}
                        index={index}
                        deleteTask={deleteTask}
                        droppableId={droppableId}
                        changeStatus={changeStatus}
                      />
                    );
                  })}
                  {provided.placeholder}
                </ul>
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};

export default TaskContainer;
