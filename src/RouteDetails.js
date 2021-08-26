//imports
import { Home, Login, Project, Signup, About } from "./pages";

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
