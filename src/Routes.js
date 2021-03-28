//dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//imports
import routes from "./RouteDetails";
import Navbar from "./components/Navbar/Navbar";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <Route exact path={`${route.path}`} id="outer-container">
              {route.navbar ? <Navbar /> : null}
              <div id="page-wrap">{route.component}</div>
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
