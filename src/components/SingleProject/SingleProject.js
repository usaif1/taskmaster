//dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { Swiper, SwiperSlide } from "swiper/react";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";

//actions
import { move, reorder } from "actions/listActions";
import { updateSingleList, updateMultiLists } from "actions/dbActions";
import { isMobile } from "actions/general";

//imports
import { Container, CentralHeading, CentralSubheading, BarLoader } from "components/common";
import TaskContainer from "../TaskCard/TaskContainer";
import { useStyles } from "./styles";
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

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

  const cubeFace = (no) => {
    return (
      <div>
        <p>this is face {no}</p>
      </div>
    );
  };

  return (
    <Container>
      {!projectDetailsLoading ? (
        <>
          <CentralHeading title={projectDetails.title} />
          <CentralSubheading title={projectDetails.description} />
          <div className={classes.dragContextContainer}>
            {isMobile() ? (
              <div>
                <Swiper effect="cube">
                  <SwiperSlide>{cubeFace(1)}</SwiperSlide>
                  <SwiperSlide>{cubeFace(2)}</SwiperSlide>
                  <SwiperSlide>{cubeFace(3)}</SwiperSlide>
                  <SwiperSlide>{cubeFace(4)}</SwiperSlide>
                </Swiper>
              </div>
            ) : (
              <DragDropContext onDragEnd={onDragEnd}>
                {/* For multiple lists to work correctly, all lists should be inside same context*/}
                <TaskContainer title="Pending" droppableId="pending" tasks={tasks} setTasks={setTasks} />
                <TaskContainer title="In Progress" droppableId="progress" tasks={tasks} setTasks={setTasks} />
                <TaskContainer title="Completed" droppableId="completed" tasks={tasks} setTasks={setTasks} />
              </DragDropContext>
            )}
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
