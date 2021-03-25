import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    fontSize: (size) => size,
  },

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "3rem !important",
    },
  },
});
