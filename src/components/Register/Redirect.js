//dependencies
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();

  const route = location.pathname.includes("login") ? "/signup" : "/login";
  const linkText = location.pathname.includes("login")
    ? "Signup here"
    : "Login here";
  const text = location.pathname.includes("login")
    ? "Do not have an account?"
    : "Already have an account?";

  return (
    <p
      style={{
        textAlign: "center",
        marginTop: "2rem",
        marginBottom: "0",
        fontSize: "1.1rem",
        fontWeight: "500",
      }}
    >
      {text} &nbsp;
      <Link to={route} style={{ color: "#0064E3", textDecoration: "none" }}>
        {linkText}
      </Link>
    </p>
  );
};

export default Redirect;
