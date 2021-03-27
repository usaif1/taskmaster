//dependencies
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//actions
import { signup, getCurrentUser, googleLogin } from "../../actions/authActions";
import { capitalize, validEmail } from "../../actions/general";

//imports
import CentralHeading from "../common/CentralHeading/CentralHeading";
import CentralSubheading from "../common/CentralSubheading/CentralSubheading";
import FormButton from "../common/FormButton/FormButton";
import SocialCard from "./SocialCard";
import SocialProviders from "./SocialProviders.json";
import { useStyles } from "./styles";

const Register = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const subheading = location.pathname.match(/[a-zA-Z]+/g);

  useEffect(() => {
    getCurrentUser(props.history);

    //eslint-disable-next-line
  }, []);

  //form onSubmit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please Enter A Valid Email!");
      return;
    }
    if (!password) {
      alert("Please Enter A Valid Password!");
      return;
    }
    if (validEmail(email)) {
      signup(email, password);
    } else {
      return null;
    }
  };

  //social card onClick handler
  const onClickHandler = () => {
    googleLogin();
  };

  return (
    <>
      <CentralHeading title={`TaskMaster`} size={`5rem`} />
      <div className={classes.formContainer}>
        <CentralSubheading
          title={`${capitalize(subheading[0])}`}
          size={`2rem`}
        />
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              className={classes.input}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={classes.input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormButton text={"some text"}>
              {capitalize(subheading[0])}
            </FormButton>
            <hr className={classes.hr} />
            {SocialProviders.map((provider) => {
              return (
                <SocialCard
                  key={provider.id}
                  name={provider.name}
                  logo={provider.logo}
                  message={provider.message}
                  onClickHandler={onClickHandler}
                />
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
