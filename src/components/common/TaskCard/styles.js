//dependencies
import { createUseStyles } from "react-jss";

//imports
// import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  listItem: {
    padding: "2rem",
    marginTop: "2rem",
    border: "1px solid red",
    display: "flex",
    justifyContent: "space-between",
  },

  dragHandle: {
    height: "6px",
    // border: "1px solid black",
    width: "30px",
    borderRadius: "0.5rem",
    // background: "#BBBBBB",
    background: "#A1A1A1",
  },
  marginBottom: {
    marginBottom: "0.2rem",
  },

  "@media only screen and (max-width: 600px)": {},
});
