import { createUseStyles } from "react-jss";

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
    background: "linear-gradient(to right, #000000, #434343)",
    left: "0",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    height: "4rem",
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
