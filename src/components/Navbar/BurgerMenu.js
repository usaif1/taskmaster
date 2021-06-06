//imports
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { v4 as uuid } from "uuid";

//actions
import { isMobile } from "actions/general";
import { isUserSignedIn, logout } from "actions/authActions";

//imports
import { links, mobileOnlyLinks } from "./NavbarLinks";
import LinkCard from "./LinkCard";
import { Colors } from "utils/Colors";
import SolidButton from "../common/SolidButton/SolidButton";
import "./bmStyles.modules.css";

const BurgerMenu = () => {
	const [open, setOpen] = useState(false);

	//handle state change burger menu
	const handleStateChange = state => {
		setOpen(state.isOpen);
	};

	// logout button onClick handler
	const onClickHandler = () => {
		logout();
		setOpen(false);
	};

	return (
		<div style={{ position: "fixed", top: "0" }}>
			<Menu
				styles={styles}
				width={isMobile() ? 210 : 400}
				pageWrapId="page-wrap"
				outerContainerId="outer-container"
				disableAutoFocus
				isOpen={open}
				onStateChange={handleStateChange}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{links.map(link => {
						return <LinkCard link={link} key={uuid()} />;
					})}
					{isMobile()
						? mobileOnlyLinks.map(link => {
								if (isUserSignedIn() && link.hideIfUser) {
									return null;
								}
								return <LinkCard link={link} key={uuid()} />;
						  })
						: null}
					{isMobile() && isUserSignedIn() ? (
						<div style={{ display: "flex", justifyContent: "center" }}>
							<SolidButton
								styles={{
									bgColor: Colors.bgRed,
								}}
								onClickHandler={onClickHandler}
							>
								Logout
							</SolidButton>
						</div>
					) : null}
				</div>
			</Menu>
		</div>
	);
};

export default BurgerMenu;

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
		// background: "black",
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
