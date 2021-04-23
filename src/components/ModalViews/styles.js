//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "../../utils/Colors";

export const useStyles = createUseStyles({
  label: {
    fontSize: "1.8rem",
    fontWeight: "500",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },

  input: {
    fontSize: "1.5rem",
    padding: "0.8rem",
    outline: "none",
    "&:focus": {
      border: `2px solid ${Colors.outlineBlue}`,
    },
  },

  btnContainer: {
    display: "flex",
    marginTop: "1rem",
  },

  /*Media Queries*/

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "3rem !important",
    },
    linkDetails: {
      fontSize: "1.3rem",
    },
    btnContainer: {
      justifyContent: "center",
    },
  },
});
