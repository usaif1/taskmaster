//dependencies
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

//actions
import { isMobile } from "actions/general";
import { isUserSignedIn, logout } from "actions/authActions";

//imports
import { CentralSubheading, OutlinedButton } from "components/common";
import BurgerMenu from "./BurgerMenu";
import { useStyles } from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  //onclick handler
  const onClickHandler = () => {
    if (isUserSignedIn()) {
      logout(history);
    } else {
      return location.pathname === "/login" ? null : history.push("/login");
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.navContainer}>
        <nav className={classes.nav}>
          <BurgerMenu />
          <Link to="/" className={classes.link}>
            <CentralSubheading title="TaskMaster" size="2.5rem" color="white" />
          </Link>
          {isMobile() ? null : (
            <OutlinedButton
              style={{
                position: "absolute",
                color: "white",
                right: "10rem",
                border: "white",
                fontSize: "1.6rem",
                hover: {
                  color: "#000000",
                  background: "rgba(255, 255, 255)",
                },
              }}
              onClickHandler={onClickHandler}
            >
              {isUserSignedIn() ? (
                "Logout"
              ) : (
                <Link className={classes.link} style={{ color: "inherit" }} to="/login">
                  Sign In
                </Link>
              )}
            </OutlinedButton>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
