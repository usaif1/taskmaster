//dependencies
import React from "react";
import { Plus } from "react-feather";

//context
import { useApp } from "context/AppContext/AppProvider";

//imports
import { useStyles } from "./styles";

const NewProjectCard = () => {
	const { openModal, setModalView } = useApp();

	const classes = useStyles();

	return (
		<div
			className={`${classes.cardContainer} ${classes.noGrabbing}`}
			onClick={() => {
				setModalView("AddNewProject");
				openModal();
			}}
		>
			<div className={classes.addNew}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Plus />
					<p className={classes.projectDescription}>Add New Project</p>
				</div>
			</div>
		</div>
	);
};

export default NewProjectCard;
