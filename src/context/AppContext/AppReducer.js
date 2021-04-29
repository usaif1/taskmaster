//imports
import { OPEN_MODAL, CLOSE_MODAL, REFRESH_PAGE } from "../../actions/types";

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

    case REFRESH_PAGE:
      return {
        ...state,
        refresh: !state.refresh,
      };

    default:
      return state;
  }
};

export default AppReducer;
