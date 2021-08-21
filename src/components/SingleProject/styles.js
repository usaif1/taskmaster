//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10rem",
  },

  taskContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },

  showBottomNav: {
    bottom: "0",
    transition: "bottom 0.8s",
  },

  hideBottomNav: {
    bottom: "-10rem !important",
    transition: "bottom 0.2s",
  },

  bottomNavContainer: {
    width: "100%",
    background: Colors.blackGrad,
    color: "white",
    display: "flex",
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

  /*Add Button*/

  btnContainer: {
    borderRadius: "50%",
    height: "6.5rem",
    width: "6.5rem",
    border: "none",
    background: "linear-gradient(to right, #161616, #222222)",
    color: "white",
    marginBottom: "-4rem",
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
    cursor: "pointer",
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

  //add input desktop

  addTaskWrapper: {
    display: "flex",
    justifyContent: "center",
  },

  addTask: {
    fontSize: "2.5rem",
    background: "rgb(55, 255, 0, 0.1)",
    border: "none",
    width: "3rem",
    height: "3rem",
    color: "rgb(0, 189, 9)",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    opacity: "1",
    transition: "opacity 0.5s 0.8s",
    position: "relative",
    zIndex: "1",
    cursor: "pointer",
  },

  fadeOut: {
    opacity: "0",
    transition: "opacity 0.5s",
  },

  addTaskContainer: {
    position: "relative",
    zIndex: "0",
    display: "flex",
    alignItems: "center",
    width: "0rem",
    opacity: "0",
    transition: "width 1s, opacity 1s",
  },

  addTaskInput: {
    border: "none",
    borderBottom: "2px solid black",
    marginLeft: "-3rem",
    width: "0rem",
    opacity: "0",
    transition: "width 1s, opacity 1s",
    outline: "none",
    fontSize: "1.6rem",
    "&::placeholder": {
      color: "grey",
      fontSize: "1.2rem",
    },
  },

  fadeIn: {
    opacity: "1",
    width: "20rem",
    transition: "width 1s 0.1s, opacity 1s, display 1s",
  },

  "@media only screen and (max-width: 600px)": {
    loaderContainer: {
      marginTop: "0",
    },
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
