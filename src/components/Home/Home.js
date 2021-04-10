//dependencies
import React from "react";

//actions
import { isUserSignedIn } from "../../actions/authActions";

//imports
import Container from "../common/Container/Container";
import Heading from "./Heading";

const Home = () => {
  return (
    <Container>
      {isUserSignedIn() ? "User already signed in" : <Heading />}
    </Container>
  );
};

export default Home;
