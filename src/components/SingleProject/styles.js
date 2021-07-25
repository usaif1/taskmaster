import { createUseStyles } from "react-jss";

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

  "@media only screen and (max-width: 600px)": {
    dragContextContainer: {
      display: "block",
    },
  },
});
