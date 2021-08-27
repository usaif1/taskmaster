//dependencies
import React from "react";

//imports
const Home = React.lazy(() => import("pages/Home"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const Project = React.lazy(() => import("pages/Project"));
const About = React.lazy(() => import("pages/About"));

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
  {
    path: "/project/:id",
    component: <Project />,
    navbar: true,
  },
  {
    path: "/about",
    component: <About />,
    navbar: true,
  },
];

export default routes;
