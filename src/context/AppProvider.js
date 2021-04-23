//dependencies
import { useReducer } from "react";

//imports
import initialState from "./state";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //open modal
  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: true,
    });
    document.body.style.overflow = "hidden";
  };

  //close modal
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
      payload: false,
    });
    document.body.style.overflow = "unset";
  };

  return (
    <AppContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
