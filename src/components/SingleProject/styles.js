//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
  },

  dragContextContainer: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 0,
  },

  li: {
    top: "auto !important",
    border: "1px solid blue",
    padding: "1rem",
    marginTop: "1rem",
  },

  /* Bottom Nav styles  */

  bottomNavContainer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    background: Colors.blackGrad,
    left: "0",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    height: "7vh",
  },

  bottomNavWrapper: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },

  statusText: {
    margin: "0",
    borderRight: "1px solid white",
    paddingRight: "5rem",
  },

  textSize: {
    fontSize: "1.2rem",
    fontWeight: "600",
    letterSpacing: "0.6px",
  },

  noSelect: {
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  },

  "@media only screen and (max-width: 600px)": {
    dragContextContainer: {
      display: "block",
    },
  },

  "@media only screen and (max-width: 330px)": {
    statusText: {
      paddingRight: "3rem",
    },
  },
});
