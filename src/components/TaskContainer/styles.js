//dependencies
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "30%",
    boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "5rem",
  },
  headingContainer: {
    border: "1px solid red",
    background: "#000000",
    color: "#ffffff",
  },
  addNewInput: {
    translate: "120px, 50%",
  },

  /* Task list container styles */

  ul: {
    padding: "1rem",
  },

  "@media only screen and (max-width: 600px)": {
    container: {
      width: "99%",
    },
  },
  "@media only screen and (max-width: 330px)": {
    ul: {
      marginBottom: "5rem",
    },
  },
});
