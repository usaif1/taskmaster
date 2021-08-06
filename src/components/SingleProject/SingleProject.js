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
import TaskContainer from "../TaskCard/TaskContainer";
import BottomNav from "./BottomNav";
import { useStyles } from "./styles";
import "swiper/swiper-bundle.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Virtual } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Virtual, EffectCoverflow]);

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

  return (
    <Container>
      {!projectDetailsLoading ? (
        <>
          <CentralHeading title={projectDetails.title} />
          <CentralSubheading title={projectDetails.description} />
          <div className={classes.dragContextContainer}>
            {isMobile() ? (
              <>
                <DragDropContext onDragEnd={onDragEnd}>
                  {/* <Swiper
                    effect="coverflow"
                    coverflowEffect={{
                      slideShadows: false,
                    }}
                    virtual={true}
                    focusableElements="span"
                    noSwipingSelector="span"
                  >
                    <SwiperSlide virtualIndex={0} key="key1">
                      <TaskContainer title="Pending" droppableId="pending" tasks={tasks} setTasks={setTasks} />
                    </SwiperSlide>
                    <SwiperSlide virtualIndex={1} key="key2">
                      <TaskContainer title="In Progress" droppableId="progress" tasks={tasks} setTasks={setTasks} />
                    </SwiperSlide>
                    <SwiperSlide virtualIndex={2} key="key3">
                      <TaskContainer title="Completed" droppableId="completed" tasks={tasks} setTasks={setTasks} />
                    </SwiperSlide>
                  </Swiper> */}
                  <TaskContainer title="Pending" droppableId="pending" tasks={tasks} setTasks={setTasks} />
                  <BottomNav />
                </DragDropContext>
              </>
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
