//dependencies
import React from "react";

//actions
import { isUserSignedIn } from "../actions/authActions";

//imports
import HomePage from "../components/HomePage/HomePage";
import LandingPage from "../components/LandingPage/LandingPage";

const Home = () => {
  return isUserSignedIn() ? <HomePage /> : <LandingPage />;
};

export default Home;
