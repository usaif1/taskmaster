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
  };

  //close modal
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
      payload: false,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
