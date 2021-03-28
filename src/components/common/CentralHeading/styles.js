import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  heading: {
    fontSize: (styles) => styles.size,
    textAlign: "center",
    color: (styles) => styles.color,
  },

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "3rem !important",
    },
  },
});
