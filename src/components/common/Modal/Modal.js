//dependencies
import React from "react";
import ReactModal from "react-modal";

//actions
import { isMobile } from "actions/general";

//context
import { useApp } from "context/AppContext/AppProvider";

const Modal = props => {
	const { open, closeModal, modalView } = useApp();

	let content;

	switch (modalView) {
		case "AddNewProject":
			content = isMobile()
				? { inset: "15rem 2rem" }
				: { inset: "16.5rem 20rem" };
			break;

		case "ConfirmDeleteProject":
			content = isMobile()
				? {
						top: "8rem",
						height: "12rem",
						margin: "auto",
						left: "2rem",
						right: "2rem",
						padding: "10px",
				  }
				: { inset: "38.5rem 72rem" };
			break;

		default:
			break;
	}

	return (
		<ReactModal
			isOpen={open}
			ariaHideApp={false}
			shouldCloseOnOverlayClick={true}
			onRequestClose={closeModal}
			style={{
				...styles,
				content: content,
			}}
		>
			{props.children}
		</ReactModal>
	);
};

export default Modal;

//custom styles for the modal

const styles = {
	overlay: {
		background: `rgba(0, 0, 0, 0.65)`,
	},
};
