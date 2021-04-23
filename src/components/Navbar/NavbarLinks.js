//dependencies
import { Info, Home, LogIn } from "react-feather";

const iconSize = 20;

export const links = [
  {
    name: "Home",
    path: "/",
    icon: <Home size={iconSize} />,
  },
  {
    name: "About",
    path: "/about",
    icon: <Info size={iconSize} />,
  },
];

export const mobileOnlyLinks = [
  {
    name: "Login",
    path: "/login",
    icon: <LogIn size={iconSize} />,
    hideIfUser: true,
  },
];
