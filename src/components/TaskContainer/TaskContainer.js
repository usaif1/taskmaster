//dependencies
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";

//actions
import { addTask, updateSingleList } from "actions/dbActions";

//imports
import TaskCard from "components/common/TaskCard/TaskCard";
import TaskHeading from "./TaskHeading";
import { useStyles } from "./styles";

const TaskContainer = ({ title, droppableId, tasks, setTasks }) => {
  const classes = useStyles();
  const { id } = useParams();

  const [showInput, setShowInput] = useState(true);
  const [value, setValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Cannot add empty task");
      return;
    }

    const newTask = addTask(value, id);

    const newArr = tasks.pending;

    newArr.unshift(newTask);

    setTasks({
      ...tasks,
      pending: newArr,
    });

    setValue("");
  };

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

  return (
    <>
      <TaskHeading title={title} />
      <div className={classes.container} onDragOver={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()}>
        {droppableId === "pending" && (
          <div
          // onFocus={() => setShowInput(true)}
          // onBlur={() => setShowInput(false)}
          >
            {/* {showInput ? (
            <form onSubmit={onSubmitHandler} style={{ display: "flex", height: "100%" }}>
              <input
                type="text"
                className={classes.addNewInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit">add new</button>
            </form>
          ) : (
            <p onClick={() => setShowInput(true)} onBlur={() => setShowInput(false)}>
              Add New Task &gt;&gt;
            </p>
          )} */}
          </div>
        )}
        <Droppable droppableId={droppableId}>
          {(provided) => {
            return (
              <div className={classes.listContainer}>
                <ul className={classes.ul} {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks[droppableId].map((task, index) => {
                    return <TaskCard key={index} task={task} index={index} deleteTask={deleteTask} />;
                  })}
                  {provided.placeholder}
                </ul>
              </div>
            );
          }}
        </Droppable>
      </div>
    </>
  );
};

export default TaskContainer;
