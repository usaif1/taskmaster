//dependencies
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: window.innerWidth / 1.5,
    margin: "auto",
  },

  "@media only screen and (max-width: 600px)": {
    container: {
      width: window.innerWidth / 1.1,
    },
  },
});
