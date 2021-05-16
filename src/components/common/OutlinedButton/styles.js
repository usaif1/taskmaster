//dependencies
import { createUseStyles } from "react-jss";

//imports
// import { Colors } from "../../../utils/Colors";

export const useStyles = createUseStyles({
  btn: {
    background: "transparent",
    border: (styles) => `1.8px solid ${styles.border}`,
    color: (styles) => styles.color,
    padding: "1rem",
    borderRadius: "0.8rem",
    fontWeight: "600",
    outline: "none",
    cursor: "pointer",
    transition: "background 0.6s",
    fontSize: (styles) => styles.fontSize,
    position: (styles) => styles.position,
    right: (styles) => (styles.right ? styles.right : "unset"),
    "&:hover": {
      color: (styles) => styles.hover.color,
      background: (styles) => styles.hover.background,
    },
  },

  "@media only screen and (max-width: 600px)": {},
});
