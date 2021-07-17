//dependencies
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    border: "1px solid grey",
    width: window.innerWidth / 5,
  },
  headingContainer: {
    border: "1px solid red",
    background: "#000000",
    color: "#ffffff",
  },
  "@media only screen and (max-width: 600px)": {},
});
