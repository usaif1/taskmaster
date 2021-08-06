//dependencies
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    border: "1px solid grey",
    width: "30%",
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
    padding: "3rem",
    marginBottom: "6rem",
  },

  "@media only screen and (max-width: 600px)": {
    container: {
      width: "99%",
    },
  },
});
