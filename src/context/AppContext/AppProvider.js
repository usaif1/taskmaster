//dependencies
import React, { useReducer, useContext } from "react";

//actions
import { disableBodyScroll, enableBodyScroll } from "actions/general";

//imports
import initialState from "./state";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { OPEN_MODAL, CLOSE_MODAL, REFRESH_PAGE, SET_MODAL_VIEW } from "../../actions/types";

export const AppProvider = ({ children }) => {
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
    disableBodyScroll();
  };

  //close modal
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
      payload: false,
    });
    enableBodyScroll();
  };

  //refresh page
  const refreshPage = () => {
    dispatch({
      type: REFRESH_PAGE,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, openModal, closeModal, refreshPage, setModalView }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(`useApp must be used within a AppProvider`);
  }
  return context;
};
