import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  heading: {
    fontSize: (styles) => styles.size,
    textAlign: "center",
    color: (styles) => styles.color,
    marginTop: "10rem",
  },

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "2.8rem !important",
      marginTop: "6rem",
    },
  },
});
