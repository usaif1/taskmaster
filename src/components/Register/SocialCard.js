//dependencies
import React from "react";

//actions

//imports
import { useStyles } from "./styles";

const SocialCard = ({ name, logo, message, onClickHandler }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer} onClick={onClickHandler}>
      <div style={{ width: "3rem" }}>
        <img src={logo} alt={`${name} provider`} style={{ width: "100%" }} />
      </div>
      <p style={{ fontSize: "1.4rem", marginLeft: "1.5rem" }}>{message}</p>
    </div>
  );
};

export default SocialCard;
