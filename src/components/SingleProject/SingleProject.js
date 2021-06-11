//dependencies
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//actions
import { getProjectById } from "actions/dbActions";

//imports
import Container from "components/common/Container/Container";
import CentralHeading from "components/common/CentralHeading/CentralHeading";

const SingleProject = () => {
	const { id } = useParams();

	console.log(id);

	useEffect(() => {
		getProjectById(id);
	}, []);

	return (
		<Container>
			<CentralHeading title={`Single Project`} />
		</Container>
	);
};

export default SingleProject;
