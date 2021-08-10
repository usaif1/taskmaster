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

  bottomNav: {
    opacity: 0.2,
  },

  showBottomNav: {
    bottom: "initial",
    transition: "bottom 2.5s",
  },

  hideBottomNav: {
    bottom: "-10rem !important",
    transition: "bottom 0.2s",
  },

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
    zIndex: "3",
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

  /*Add Button*/

  btnContainer: {
    position: "fixed",
    borderRadius: "50%",
    height: "6.5rem",
    width: "6.5rem",
    bottom: "2%",
    border: "none",
    background: "linear-gradient(to right, #161616, #222222)",
    color: "white",
    // zIndex: "-10",
    left: "41%",
  },

  plus: {
    marginTop: "-0.5rem",
    fontSize: "2.4rem",
    color: "white",
  },

  /*Add input styles*/
  addInputContainer: {
    position: "fixed",
    zIndex: "10",
    height: "0vh",
    background: "black",
    width: "100%",
    left: "0",
    bottom: "0",
    opacity: "0.95",
    transition: "height 0.4s 0.25s",
    borderTopRightRadius: "2rem",
    borderTopLeftRadius: "2rem",
  },

  increaseHeight: {
    height: "20vh",
  },

  btnAdd: {
    border: "none",
    background: "transparent",
  },

  addInputForm: {
    display: "flex",
    alignItems: "center",
    marginTop: "1rem",
  },

  input: {
    width: "30rem",
    padding: "1rem",
    border: "none",
    borderRadius: "0.8rem",
    height: "2rem",
    background: "#000000",
    outline: "none",
    color: "white",
    fontWeight: "600",
    marginLeft: "1rem",
    fontSize: "1.3rem",
  },

  ctaContainer: {
    display: "flex",
    width: "10rem",
    justifyContent: "space-evenly",
    marginRight: "1rem",
  },

  error: {
    color: "#FF5959",
    fontSize: "1.1rem",
    marginLeft: "1rem",
    fontWeight: "600",
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
