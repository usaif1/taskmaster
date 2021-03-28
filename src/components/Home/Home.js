//dependencies
import React from "react";

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
    </div>
  );
};

export default Home;
