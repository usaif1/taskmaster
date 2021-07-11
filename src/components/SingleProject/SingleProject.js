//dependencies
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//context
import { useProject } from "context/ProjectContext/ProjectProvider";

//imports
import { Container, CentralHeading, CentralSubheading, BarLoader } from "components/common";
import { useStyles } from "./styles";

const SingleProject = () => {
  const { setProjectDetails, projectDetails, projectDetailsLoading } = useProject();
  const { id } = useParams();

  const classes = useStyles();

  useEffect(() => {
    setProjectDetails(id);

    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      {!projectDetailsLoading ? (
        <>
          <CentralHeading title={projectDetails.title} />
          <CentralSubheading title={projectDetails.description} />
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
