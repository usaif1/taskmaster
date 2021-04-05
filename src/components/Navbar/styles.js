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

  /* Link Card Styles*/
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderBottom: "0.1px solid white",
    marginBottom: "1rem",
    color: "white",
  },
  linkDetails: {
    fontSize: "2rem",
    marginLeft: "1.8rem",
  },

  /*Media Queries*/

  "@media only screen and (max-width: 600px)": {
    heading: {
      fontSize: "3rem !important",
    },
    linkDetails: {
      fontSize: "1.3rem",
    },
  },
});
