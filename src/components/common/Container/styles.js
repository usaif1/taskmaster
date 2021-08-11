//dependencies
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "65%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },

  "@media only screen and (max-width: 600px)": {
    container: {
      width: "95%",
      margin: "auto",
      display: "block",
    },
  },
});
