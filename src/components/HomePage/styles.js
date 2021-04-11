//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "../../utils/Colors";

export const useStyles = createUseStyles({
  titleContainer: {
    marginTop: "15rem",
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "600",
  },

  icon: {
    marginLeft: "1rem",
  },

  /* Project Card Styles*/
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  cardContainer: {
    boxShadow: `1px 1px 8px ${Colors.boxShadow}`,
    marginRight: "2rem",
    marginTop: "2rem",
    padding: "1.2rem",
    borderRadius: "2rem",
    width: window.innerWidth / 9,
    height: "20rem",
    wordWrap: "break-word",
    cursor: "pointer",
    overflow: "hidden",
  },
  projectTitle: {
    fontSize: "1.8rem",
  },
  projectDescription: {
    fontSize: "1.4rem",
  },
  addNew: {
    height: window.innerHeight / 7.7,
    border: `2px dashed ${Colors.borderLight}`,
    borderRadius: "2rem",
    margin: "1.5rem",
    padding: "2rem",
  },

  /*Media Queries*/

  "@media only screen and (max-width: 600px)": {
    titleContainer: {
      marginTop: "unset",
      justifyContent: "center",
    },
    title: {
      fontSize: "2rem",
    },
    icon: {
      marginLeft: "0.5rem",
    },
    listContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    cardContainer: {
      width: "85%",
      height: "18rem",
      marginRight: "unset",
    },
    projectTitle: {
      fontSize: "1.4rem",
    },
    projectDescription: {
      fontSize: "1rem",
    },
    addNew: {
      height: window.innerHeight / 6.85,
    },
  },
});
