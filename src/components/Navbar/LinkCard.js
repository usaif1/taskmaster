//dependencies
import React from "react";
import { Link } from "react-router-dom";

//imports
import { useStyles } from "./styles";

const LinkCard = ({ link }) => {
  const classes = useStyles();

  return (
    <Link to={`${link.path}`} className={classes.link}>
      <div className={classes.cardContainer}>
        {link.icon}
        <p className={classes.linkDetails}>{link.name}</p>
      </div>
    </Link>
  );
};

export default LinkCard;
