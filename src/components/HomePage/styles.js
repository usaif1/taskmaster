//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "utils/Colors";

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
    display: "flex",
    flexDirection: "column",
    marginRight: "2rem",
    marginTop: "3rem",
    padding: "1.2rem",
    borderRadius: "2rem",
    width: "18%",
    height: "20rem",
    wordWrap: "break-word",
    overflow: "hidden",
    background: "#ffffff",
    "&:hover": {
      cursor: "pointer",
    },
  },

  textContainer: {},

  projectTitle: {
    fontSize: "1.8rem",
  },
  projectDescription: {
    fontSize: "1.4rem",
    //multi line ellipse
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "4",
    WebkitBoxOrient: "vertical",
  },
  addNew: {
    border: `2px dashed ${Colors.dashedBorder}`,
    borderRadius: "inherit",
    margin: "1rem",
    padding: "5rem 0",
  },

  chevronLeft: {
    position: "absolute",
    top: "7rem",
  },

  //for loader to be centered on mobile view
  BarLoader: {
    marginLeft: "5rem",
  },

  /*Media Queries*/

  "@media only screen and (max-width: 1500px)": {
    cardContainer: {
      width: "100%",
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
      marginBottom: "5rem",
    },
    cardContainer: {
      width: "85%",
      height: "15rem",
      marginRight: "unset",
      flexDirection: "row",
      alignContent: "center",
      justifyContent: "space-between",
    },
    dragHandle: {
      bottom: "0",
      right: "1rem",
      left: "unset",
    },
    textContainer: {
      marginBottom: "unset",
      width: "85%",
    },
    projectTitle: {
      fontSize: "1.5rem",
    },
    projectDescription: {
      fontSize: "1.3rem",
    },
    addNew: {
      margin: "0.4rem",
      padding: "3.4rem 0",
      width: "100%",
    },
    BarLoader: {
      marginLeft: "0",
    },
  },
});
