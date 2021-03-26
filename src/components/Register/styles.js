//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "../../utils/Colors";

export const useStyles = createUseStyles({
  formContainer: {
    border: `1px solid ${Colors.borderLight}`,
    width: window.innerWidth / 4,
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
    width: window.innerWidth / 4.8,
  },

  input: {
    fontSize: "1.8rem",
    padding: "0.8rem",
    outline: "none",
    borderRadius: "0.5rem",
    border: "1px solid black",
    marginTop: "2rem",
    "&:focus": {
      border: "2px solid #4CABFF",
    },
  },

  "@media only screen and (max-width: 600px)": {
    formContainer: {
      width: window.innerWidth / 1.3,
    },
    inputContainer: {
      width: window.innerWidth / 1.5,
    },
    input: {
      fontSize: "1.6rem",
    },
  },
});
