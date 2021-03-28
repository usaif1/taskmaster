//dependencies
import React from "react";
import { push as Menu } from "react-burger-menu";

//imports
import CentralHeading from "../common/CentralHeading/CentralHeading";

const Navbar = () => {
  return (
    <>
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
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: window.innerWidth / 1.15,
          margin: "auto",
        }}
      >
        <CentralHeading title="TaskMaster" size="2.5rem" />
        <p>About</p>
        <button>Login</button>
      </nav>
    </>
  );
};

export default Navbar;

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
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
    background: "#373a47",
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
