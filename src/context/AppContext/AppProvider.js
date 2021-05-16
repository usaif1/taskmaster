//dependencies
import React, { useReducer } from "react";

//imports
import initialState from "./state";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  REFRESH_PAGE,
  SET_MODAL_VIEW,
} from "../../actions/types";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //set modal view
  const setModalView = (view) => {
    dispatch({
      type: SET_MODAL_VIEW,
      payload: view,
    });
  };

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

  //refresh page
  const refreshPage = () => {
    dispatch({
      type: REFRESH_PAGE,
    });
  };

  return (
    <AppContext.Provider
      value={{ ...state, openModal, closeModal, refreshPage, setModalView }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useApp = () => {
  const context = React.createContext(AppContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
