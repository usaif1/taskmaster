//dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";

//actions
import { move, reorder } from "actions/listActions";
import { updateSingleList, updateMultiLists } from "actions/dbActions";
import { isMobile } from "actions/general";

//imports
import { Container, CentralHeading, CentralSubheading, BarLoader } from "components/common";
import TaskContainer from "../TaskContainer/TaskContainer";
import BottomNav from "./BottomNav";
import AddInput from "./AddInput";
import AddInputDesktop from "./AddInputDesktop";
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

  const [status, setStatus] = useState("pending");
  const [open, setOpen] = useState(false);

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

      if (isMobile()) {
        return null;
      }

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

  return !projectDetailsLoading ? (
    <>
      <CentralHeading title={projectDetails.title} />
      <CentralSubheading title={projectDetails.description} />
      {!isMobile() && <AddInputDesktop id={id} tasks={tasks} setTasks={setTasks} />}
      <div className={classes.dragContextContainer}>
        {isMobile() ? (
          <>
            <Container>
              <DragDropContext onDragEnd={onDragEnd}>
                {status === "pending" && (
                  <TaskContainer title="Pending" droppableId="pending" tasks={tasks} setTasks={setTasks} />
                )}
                {status === "progress" && (
                  <TaskContainer title="In Progress" droppableId="progress" tasks={tasks} setTasks={setTasks} />
                )}
                {status === "completed" && (
                  <TaskContainer title="Completed" droppableId="completed" tasks={tasks} setTasks={setTasks} />
                )}
                <AddInput setOpen={setOpen} open={open} id={id} tasks={tasks} setTasks={setTasks} />
              </DragDropContext>
            </Container>
            <BottomNav setStatus={setStatus} setOpen={setOpen} open={open} />
          </>
        ) : (
          <>
            <Container>
              <div className={classes.taskContainer}>
                <DragDropContext onDragEnd={onDragEnd}>
                  {/* For multiple lists to work correctly, all lists should be inside same context*/}
                  <TaskContainer title="Pending" droppableId="pending" tasks={tasks} setTasks={setTasks} />
                  <TaskContainer title="In Progress" droppableId="progress" tasks={tasks} setTasks={setTasks} />
                  <TaskContainer title="Completed" droppableId="completed" tasks={tasks} setTasks={setTasks} />
                </DragDropContext>
              </div>
            </Container>
          </>
        )}
      </div>
    </>
  ) : (
    <Container>
      <div className={classes.loaderContainer}>
        <BarLoader />
      </div>
    </Container>
  );
};

export default SingleProject;
