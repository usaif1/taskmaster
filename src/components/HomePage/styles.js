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

  scaleLoaderContainer: {
    marginLeft: "5rem",
  },

  /* Project Card Styles*/
  listContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "2rem",
    alignItems: "center",
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
    border: `2px dashed ${Colors.dashedBorder}`,
    borderRadius: "inherit",
    margin: "1rem",
    padding: "5rem 0",
  },

  /*Media Queries*/

  "@media only screen and (max-width: 1500px)": {
    cardContainer: {
      width: window.innerWidth / 6,
    },
  },

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

    scaleLoaderContainer: {
      marginLeft: "unset",
      marginTop: "5rem",
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
      fontSize: "1.5rem",
    },
    projectDescription: {
      fontSize: "1.3rem",
    },
    addNew: {
      margin: "0.4rem",
    },
  },
});
