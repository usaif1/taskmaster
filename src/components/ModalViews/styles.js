//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  label: {
    fontSize: "1.8rem",
    fontWeight: "500",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },

  input: {
    fontSize: "1.5rem",
    padding: "0.8rem 0",
    outline: "none",
    border: "none",
    "&:focus": {
      borderBottom: `2px solid ${Colors.outlineBlue}`,
    },
  },

  textArea: {
    marginTop: "1rem",
    outline: "none",
  },

  btnContainer: {
    display: "flex",
    marginTop: "1rem",
  },

  /*Confirm Modal Styles*/

  confirmText: {
    fontSize: "1.8rem",
    fontWeight: "600",
    textAlign: "center",
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
    confirmText: {
      fontSize: "1.4rem",
    },
  },
});
