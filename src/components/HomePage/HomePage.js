//dependencies
import React, { useEffect } from "react";
import { ArrowRight } from "react-feather";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";
import { useApp } from "context/AppContext/AppProvider";

//imports

import { Container, CentralHeading, Modal, BarLoader } from "components/common";
import Confirm from "../ModalViews/Confirm";
import ProjectCard from "./ProjectCard";
import NewProjectCard from "./NewProjectCard";
import AddNewProject from "../ModalViews/AddNewProject";
import NoProjectFound from "./NoProjectFound";
import { useStyles } from "./styles";

const Home = () => {
  const { refresh, modalView } = useApp();
  const { projects, getUserProjects, projectsLoading } = useProject();

  const classes = useStyles();

  useEffect(() => {
    getUserProjects();
    //eslint-disable-next-line
  }, [refresh]);

  return (
    <Container>
      <CentralHeading title={`Welcome  ${JSON.parse(localStorage.getItem("user")).displayName}`} />
      <div className={classes.titleContainer}>
        <p className={classes.title}>Your Projects</p>
        <ArrowRight className={classes.icon} size={30} />
      </div>
      <div className={classes.listContainer} style={{ overflow: "visible" }}>
        <NewProjectCard />
        {!projectsLoading ? (
          projects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })
        ) : (
          <BarLoader className={classes.BarLoader} />
        )}
        {!projects.length && !projectsLoading && <NoProjectFound />}
      </div>
      <>
        <Modal>
          {modalView === "AddNewProject" ? <AddNewProject /> : null}
          {modalView === "ConfirmDeleteProject" ? (
            <Confirm text={"Are you sure you want to delete this project?"} />
          ) : null}
        </Modal>
      </>
    </Container>
  );
};

export default Home;
