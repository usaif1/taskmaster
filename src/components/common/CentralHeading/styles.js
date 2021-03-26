import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  heading: {
    fontSize: (size) => size,
    textAlign: "center",
  },

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "3rem !important",
    },
  },
});
