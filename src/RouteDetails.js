//imports
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = [
  {
    path: "/",
    component: <Home />,
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
