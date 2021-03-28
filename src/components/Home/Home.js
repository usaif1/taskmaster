//dependencies
import React from "react";
import { Link } from "react-router-dom";

//actions
import { logout } from "../../actions/authActions";

//imports
import Heading from "./Heading";

const Home = () => {
  //onClick handler
  const onClickHandler = () => {
    logout();
  };

  return (
    <div>
      <Heading />
      <button onClick={onClickHandler}>Logout</button>
      <Link to="/signup">
        <p>Signup</p>
      </Link>
    </div>
  );
};

export default Home;
