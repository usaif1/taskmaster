//dependencies
import React from "react";
import { slide as Menu } from "react-burger-menu";

//imports
import CentralHeading from "../common/CentralHeading/CentralHeading";

const Navbar = () => {
  return (
    <div>
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
          justifyContent: "space-between",
          alignItems: "center",
          width: window.innerWidth / 1.15,
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CentralHeading title="TaskMaster" size="2.5rem" />
          <p>About</p>
          <button>Login</button>
        </div>
      </nav>
    </div>
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
