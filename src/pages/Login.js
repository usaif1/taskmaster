import React from "react";

//imports
import Register from "../components/Register/Register";

const Login = (props) => {
  return (
    <div>
      <Register history={props.history} />
    </div>
  );
};

export default Login;
