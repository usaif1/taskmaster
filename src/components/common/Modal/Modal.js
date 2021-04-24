//dependencies
import React, { useContext } from "react";
import ReactModal from "react-modal";

//actions
import { isMobile } from "../../../actions/general";

//context
import AppContext from "../../../context/AppContext/AppContext";

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
    inset: isMobile() ? `10rem  2rem` : "165px 200px",
    // inset: "unset",
    // height: isMobile() ? "40rem" :
    // margin: "auto",
    // width: "33rem",
    // position: "relative",
    // top: "20rem",
  },
  overlay: {
    background: `rgba(0, 0, 0, 0.65)`,
  },
};
