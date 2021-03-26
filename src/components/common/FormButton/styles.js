//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "../../../utils/Colors";

export const useStyles = createUseStyles({
  button: {
    marginTop: "2rem",
    padding: "0.8rem",
    fontSize: "1.8rem",
    background: "#5AAC44",
    color: "white",
    border: "none",
    boxShadow: `0.5px 0.5px 3px ${Colors.boxShadow}`,
    fontWeight: "600",
    cursor: "pointer",
  },

  "@media only screen and (max-width: 600px)": {
    button: {
      fontSize: "1.6rem !important",
    },
  },
});
