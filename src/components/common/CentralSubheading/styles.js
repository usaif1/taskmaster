import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  subheading: {
    fontSize: (styles) => styles.size,
    textAlign: "center",
    color: (styles) => styles.color,
  },

  "@media only screen and (max-width: 600px)": {
    subheading: {
      fontSize: "1.5rem !important",
    },
  },
});
