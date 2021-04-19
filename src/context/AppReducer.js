//imports
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const AppReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };

    default:
      return state;
  }
};

export default AppReducer;
