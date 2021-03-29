//dependencies
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useHistory, useLocation } from "react-router-dom";

//actions
import { isMobile } from "../../actions/general";
import { isUserSignedIn, logout } from "../../actions/authActions";

//imports
import CentralSubheading from "../common/CentralSubheading/CentralSubheading";
import OutlinedButton from "../common/OutlinedButton/OutlinedButton";
import { Colors } from "../../utils/Colors";
import { useStyles } from "./styles";

const Navbar = () => {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  //onclick handler
  const onClickHandler = () => {
    if (isUserSignedIn()) {
      logout();
    } else {
      return location.pathname === "/login" ? null : history.push("/login");
    }
  };

  return (
    <div className={classes.container}>
      <Menu
        styles={styles}
        width={250}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      >
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
      </Menu>
      <div className={classes.navContainer}>
        <nav className={classes.nav}>
          <Link to="/" className={classes.link}>
            <CentralSubheading title="TaskMaster" size="2.5rem" color="white" />
          </Link>
          {isMobile() ? null : (
            <OutlinedButton
              style={{
                position: "fixed",
                right: "10rem",
                borderColor: "white",
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
                <Link
                  className={classes.link}
                  style={{ color: "inherit" }}
                  to="/signup"
                >
                  Login
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

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: isMobile() ? "33px" : "36px",
    height: isMobile() ? "20px" : "30px",
    left: isMobile() ? "25px" : "36px",
    top: isMobile() ? "16px" : "23px",
  },
  bmBurgerBars: {
    background: "white",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: `${Colors.darkBg}`,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
