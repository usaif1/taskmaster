//dependencies
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  button: {
    width: "86%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
    padding: "1rem",
    fontSize: "1.8rem",
    background: (styles) => styles.bgColor,
    color: "white",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    borderRadius: "0.5rem",
    position: "absolute",
    bottom: "3rem",
  },

  "@media only screen and (max-width: 600px)": {
    button: {
      width: "80%",
      fontSize: "1.6rem !important",
    },
  },
});
