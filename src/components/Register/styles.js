//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  formContainer: {
    border: `1px solid ${Colors.borderLight}`,
    width: "25%",
    margin: "auto",
    boxShadow: `1px 1px 3px ${Colors.boxShadow}`,
    paddingBottom: "3rem",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
  },

  input: {
    fontSize: "1.8rem",
    padding: "0.8rem",
    outline: "none",
    borderRadius: "0.5rem",
    border: "1px solid black",
    marginTop: "2rem",
    "&:focus": {
      border: `2px solid ${Colors.outlineBlue}`,
    },
  },

  hr: {
    margin: "5rem auto",
    width: "75%",
    borderTop: `0.1px solid ${Colors.borderLight}`,
  },

  /* Social Card Styles */
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    border: `1px solid ${Colors.borderLight}`,
    padding: "0.5rem",
    boxShadow: `1px 1px 3px ${Colors.boxShadow}`,
    cursor: "pointer",
    borderRadius: "0.8rem",
  },

  "@media only screen and (max-width: 600px)": {
    formContainer: {
      width: "80%",
    },
    inputContainer: {
      width: "85%",
    },
    input: {
      fontSize: "1.6rem",
    },
    cardContainer: {
      width: "unset",
      padding: "0.2rem",
    },
  },
});
