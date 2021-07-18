//dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";

//actions
import { move, reorder } from "actions/listActions";
import { updateSingleList, updateMultiLists } from "actions/dbActions";

//imports
import { Container, CentralHeading, CentralSubheading, BarLoader } from "components/common";
import TaskContainer from "../TaskCard/TaskContainer";
import { useStyles } from "./styles";

const SingleProject = () => {
  const { setProjectDetails, projectDetails, projectDetailsLoading } = useProject();
  const { id } = useParams();

  const classes = useStyles();

  const [tasks, setTasks] = useState({
    pending: [],
    progress: [],
    completed: [],
  });

  useEffect(() => {
    setProjectDetails(id);

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (projectDetails && !projectDetailsLoading) {
      setTasks({
        pending: projectDetails.tasks.pending,
        progress: projectDetails.tasks.progress,
        completed: projectDetails.tasks.completed,
      });
    }

    //eslint-disable-next-line
  }, [projectDetails.tasks]);

  const getTasksByStatus = (droppable_status) => {
    return tasks[droppable_status];
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    //if reorder in same list
    if (source.droppableId === destination.droppableId) {
      const items = reorder(tasks[source.droppableId], source.index, destination.index);
      setTasks({ ...tasks, [`${source.droppableId}`]: items });
      updateSingleList(source.droppableId, items, id);
    } else {
      //to move data across different lists
      const result = move(
        getTasksByStatus(source.droppableId),
        getTasksByStatus(destination.droppableId),
        source,
        destination
      );

      setTasks({
        ...tasks,
        [`${source.droppableId}`]: result[`${source.droppableId}`],
        [`${destination.droppableId}`]: result[`${destination.droppableId}`],
      });

      updateMultiLists(
        source.droppableId,
        result[`${source.droppableId}`],
        destination.droppableId,
        result[`${destination.droppableId}`],
        id
      );
    }
  };

  return (
    <Container>
      {!projectDetailsLoading ? (
        <>
          <CentralHeading title={projectDetails.title} />
          <CentralSubheading title={projectDetails.description} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DragDropContext onDragEnd={onDragEnd}>
              {/* For multiple lists to work correctly, all lists should be inside same context*/}
              <TaskContainer title="Pending" droppableId="pending" tasks={tasks} setTasks={setTasks} />
              <TaskContainer title="In Progress" droppableId="progress" tasks={tasks} setTasks={setTasks} />
              <TaskContainer title="Completed" droppableId="completed" tasks={tasks} setTasks={setTasks} />
            </DragDropContext>
          </div>
        </>
      ) : (
        <div className={classes.loaderContainer}>
          <BarLoader />
        </div>
      )}
    </Container>
  );
};

export default SingleProject;

// const [tasks, setTasks] = useState({
//   pending: [
//     {
//       id: "1",
//       description: "Work on bug 1",
//     },
//     {
//       id: "2",
//       description: "Work on bug 2",
//     },
//     {
//       id: "3",
//       description: "Work on bug 3",
//     },
//     {
//       id: "4",
//       description: "Work on bug 4",
//     },
//     {
//       id: "5",
//       description: "Work on bug 5",
//     },
//   ],
//   progress: [
//     {
//       id: "6",
//       description: "Working on bug 1",
//     },
//     {
//       id: "7",
//       description: "Working on bug 2",
//     },
//     {
//       id: "8",
//       description: "Working on bug 3",
//     },
//     {
//       id: "9",
//       description: "Working on bug 4",
//     },
//     {
//       id: "10",
//       description: "Working on bug 5",
//     },
//   ],
//   completed: [
//     {
//       id: "11",
//       description: "Completed bug 1",
//     },
//     {
//       id: "12",
//       description: "Completed bug 2",
//     },
//     {
//       id: "13",
//       description: "Completed bug 3",
//     },
//     {
//       id: "14",
//       description: "Completed bug 4",
//     },
//     {
//       id: "15",
//       description: "Completed bug 5",
//     },
//   ],
// });
