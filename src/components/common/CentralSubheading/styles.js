import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  subheading: {
    fontSize: (size) => size,
    textAlign: "center",
  },

  "@media only screen and (max-width: 600px)": {
    subheading: {
      fontSize: "1.5rem !important",
    },
  },
});
