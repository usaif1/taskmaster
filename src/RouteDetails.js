//imports
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = [
  {
    path: "/",
    component: <Homepage />,
    navbar: true,
  },
  {
    path: "/signup",
    component: <Signup />,
    navbar: true,
  },
  {
    path: "/login",
    component: <Login />,
    navbar: true,
  },
];

export default routes;
