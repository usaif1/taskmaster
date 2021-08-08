//dependencies
import { createUseStyles } from "react-jss";

//imports
// import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      display: "none",
    },
  },

  wrapper: {
    display: "block",
  },

  container: {
    // width: "30%",
    // marginBottom: "5rem",
  },
  addNewInput: {
    translate: "120px, 50%",
  },
  heading: {
    background: (bg) => bg,
    color: "white",
    padding: "1rem",
    borderRadius: "1rem",
    fontSize: "1.6rem",
    textAlign: "center",
    margin: "0 auto",
    width: "15vw",
  },

  /* Task list container styles */

  listContainer: {
    overflow: "scroll",
    height: "40rem",
    position: "relative",
    marginTop: "1rem",
  },

  ul: {
    listStyleType: "none",
    padding: "1rem",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },

  "@media only screen and (max-width: 600px)": {
    container: {
      width: "99%",
    },
    heading: {
      width: "initial",
    },
  },
  // "@media only screen and (max-width: 330px)": {
  //   ul: {
  // marginBottom: "5rem",
  //   },
  // },
});
