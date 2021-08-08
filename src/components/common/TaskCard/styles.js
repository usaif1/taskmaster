//dependencies
import { createUseStyles } from "react-jss";

//imports
import { Colors } from "utils/Colors";

export const useStyles = createUseStyles({
  listItem: {
    marginTop: "2rem",
    boxShadow: `0.1px 0.1px 5px ${Colors.boxShadow}`,
    background: "#ffffff",
    borderRadius: "1rem",
    fontSize: "1.5rem",
    fontWeight: "600",
    wordBreak: "break-word",
  },

  dragHandle: {
    height: "6px",
    width: "30px",
    borderRadius: "0.5rem",
    background: Colors.lightGreyGrad,
  },
  marginBottom: {
    marginBottom: "0.2rem",
  },

  descriptionContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    alignItems: "center",
  },

  iconContainer: {
    position: "absolute",
    right: "0.2rem",
    marginTop: "-1rem",
  },

  "@media only screen and (max-width: 600px)": {},
});
