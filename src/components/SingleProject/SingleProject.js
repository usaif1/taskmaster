//dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";

//imports
import { Container, CentralHeading, CentralSubheading, BarLoader } from "components/common";
import TaskContainer from "../TaskCard/TaskContainer";
import { pendingTasks, inProgressTasks } from "../TaskCard/dummyData";
import { useStyles } from "./styles";

const SingleProject = () => {
  const { setProjectDetails, projectDetails, projectDetailsLoading } = useProject();
  const { id } = useParams();

  const classes = useStyles();

  const [tasks, setTasks] = useState({
    pending: [
      {
        id: 1,
        text: "Work on bug 1",
      },
      {
        id: 2,
        text: "Work on bug 2",
      },
      {
        id: 3,
        text: "Work on bug 3",
      },
      {
        id: 4,
        text: "Work on bug 4",
      },
      {
        id: 5,
        text: "Work on bug 5",
      },
    ],
    progress: [
      {
        id: 6,
        text: "Working on bug 1",
      },
      {
        id: 7,
        text: "Working on bug 2",
      },
      {
        id: 8,
        text: "Working on bug 3",
      },
      {
        id: 9,
        text: "Working on bug 4",
      },
      {
        id: 10,
        text: "Working on bug 5",
      },
    ],
  });

  useEffect(() => {
    setProjectDetails(id);

    //eslint-disable-next-line
  }, []);

  const getTasksByStatus = (droppable_status) => {
    return tasks[droppable_status];
  };

  const onDragEnd = (result) => {
    // console.log(result);
    const { source, destination } = result;

    console.log("destination", destination);
    console.log("result", result);

    if (!destination) return;

    //if reorder in same list
    // if (source.droppableId === destination.droppableId) {
    //   const items = reorder(tasks[droppableId], source.index, destination.index);
    //   // console.log(items);
    //   setTasks({ ...tasks, [`${droppableId}`]: items });
    // } else {
    //   // debugger;
    //   const result = move(
    //     getTasksByStatus(source.droppableId),
    //     getTasksByStatus(destination.droppableId),
    //     source,
    //     destination
    //   );

    //   // console.log(result);
    // }

    //if move between lists
  };

  return (
    <Container>
      {!projectDetailsLoading ? (
        <>
          <CentralHeading title={projectDetails.title} />
          <CentralSubheading title={projectDetails.description} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DragDropContext onDragEnd={onDragEnd}>
              {/* For multiple lists to work correctly, they should be inside same context*/}
              <TaskContainer
                title="Pending"
                droppableId="pending"
                tasks={tasks}
                setTasks={setTasks}
                getTasksByStatus={getTasksByStatus}
              />
              <TaskContainer
                title="In Progress"
                droppableId="progress"
                tasks={tasks}
                setTasks={setTasks}
                getTasksByStatus={getTasksByStatus}
              />
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

// const [tasks1, setTasks1] = useState([
//   {
//     id: 1,
//     text: "Work on bug 1",
//   },
//   {
//     id: 2,
//     text: "Work on bug 2",
//   },
//   {
//     id: 3,
//     text: "Work on bug 3",
//   },
//   {
//     id: 4,
//     text: "Work on bug 4",
//   },
//   {
//     id: 5,
//     text: "Work on bug 5",
//   },
// ]);

// const [tasks2, setTasks2] = useState([
//   {
//     id: 6,
//     text: "Working on bug 1",
//   },
//   {
//     id: 7,
//     text: "Working on bug 2",
//   },
//   {
//     id: 8,
//     text: "Working on bug 3",
//   },
//   {
//     id: 9,
//     text: "Working on bug 4",
//   },
//   {
//     id: 10,
//     text: "Working on bug 5",
//   },
// ]);
