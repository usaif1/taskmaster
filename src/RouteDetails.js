//dependencies
import React, { Suspense } from "react";

//imports
// import { Home, Login, Project, Signup, About } from "./pages";

const Home = React.lazy(() => import("pages/Home"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const Project = React.lazy(() => import("pages/Project"));
const About = React.lazy(() => import("pages/About"));

const routes = [
  {
    path: "/",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    navbar: true,
  },
  {
    path: "/signup",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Signup />
      </Suspense>
    ),
    navbar: true,
  },
  {
    path: "/login",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
    navbar: true,
  },
  {
    path: "/project/:id",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <Project />
      </Suspense>
    ),
    navbar: true,
  },
  {
    path: "/about",
    component: (
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    ),
    navbar: true,
  },
];

export default routes;
