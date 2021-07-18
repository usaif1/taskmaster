//dependencies
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";

//imports
import TaskCard from "components/common/TaskCard/TaskCard";
import { useStyles } from "./styles";

const TaskContainer = ({ title, droppableId, tasks, setTasks, droppableId2, getTasksByStatus }) => {
  const classes = useStyles();

  //to move within same list
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // Move item from one list to other
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result) => {
    // console.log(result);
    const { source, destination } = result;

    // console.log("destination", destination);
    // console.log("result", result);

    if (!destination) return;

    //if reorder in same list
    if (source.droppableId === destination.droppableId) {
      const items = reorder(tasks[droppableId], source.index, destination.index);
      // console.log(items);
      setTasks({ ...tasks, [`${droppableId}`]: items });
    } else {
      debugger;
      const result = move(
        getTasksByStatus(source.droppableId),
        getTasksByStatus(destination.droppableId),
        source,
        destination
      );
      console.log("result --> ", result);
      // console.log(result);
    }

    //if move between lists
  };

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
        {/* <DragDropContext onDragEnd={onDragEnd}> */}
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
        {/* </DragDropContext> */}
      </div>
    </div>
  );
};

export default TaskContainer;
