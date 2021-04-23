//dependencies
import React, { useContext } from "react";
import ReactModal from "react-modal";

//actions
import { isMobile } from "../../../actions/general";

//context
import AppContext from "../../../context/AppContext";

const Modal = (props) => {
  const { open, closeModal } = useContext(AppContext);

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      style={styles}
    >
      {props.children}
    </ReactModal>
  );
};

export default Modal;

//custom styles for the modal

const styles = {
  content: {
    inset: isMobile() ? "100px  20px" : "170px",
  },
};
