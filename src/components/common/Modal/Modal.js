//dependencies
import React, { useContext } from "react";
import ReactModal from "react-modal";

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
    >
      {props.children}
    </ReactModal>
  );
};

export default Modal;
