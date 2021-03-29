//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "../../utils/Colors";

export const useStyles = createUseStyles({
  container: {
    background: `${Colors.darkBg}`,
    color: "white",
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "3rem !important",
    },
  },
});
