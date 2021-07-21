import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
  },

  dragContextContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  "@media only screen and (max-width: 600px)": {
    dragContextContainer: {
      display: "block",
    },
  },
});
