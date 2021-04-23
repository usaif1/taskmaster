//dependencies
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

//actions

//imports
import { useStyles } from "./styles";

const SocialCard = ({ name, logo, message, onClickHandler, loading }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cardContainer} onClick={onClickHandler}>
        <div style={{ width: "3rem" }}>
          <img src={logo} alt={`${name} provider`} style={{ width: "100%" }} />
        </div>
        <p style={{ fontSize: "1.4rem", marginLeft: "1.5rem" }}>{message}</p>
        {loading ? (
          <div style={{ marginLeft: "1rem" }}>
            <ClipLoader color="#000000" size={10} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SocialCard;
