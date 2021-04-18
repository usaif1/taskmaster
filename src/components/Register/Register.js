//dependencies
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

//actions
import { isUserSignedIn, googleLogin } from "../../actions/authActions";
import { capitalize, validEmail } from "../../actions/general";

//imports
import CentralHeading from "../common/CentralHeading/CentralHeading";
import CentralSubheading from "../common/CentralSubheading/CentralSubheading";
import FormButton from "../common/FormButton/FormButton";
import SocialCard from "./SocialCard";
import Redirect from "./Redirect";
import SocialProviders from "./SocialProviders.json";
import { useStyles } from "./styles";

const Register = ({ action }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const subheading = location.pathname.match(/[a-zA-Z]+/g);

  useEffect(() => {
    if (isUserSignedIn()) {
      return history.push("/");
    }
    //eslint-disable-next-line
  }, []);

  //form onSubmit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (loading || loading2) return null;

    if (!email) {
      alert("Please Enter A Valid Email!");
      return;
    }
    if (!password) {
      alert("Please Enter A Valid Password!");
      return;
    }
    if (validEmail(email)) {
      setLoading(true);
      action(email, password, history, setLoading);
      // signIn(email, password, history, setLoading);
    } else {
      return null;
    }
  };

  //social card onClick handler
  const onClickHandler = () => {
    setLoading2(true);
    if (loading || loading2) return null;
    googleLogin(history, setLoading2);
  };

  return (
    <>
      <CentralHeading title={`Sign Up/ Login to TaskMaster`} size={`4rem`} />
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
              required
              disabled={loading || loading2}
            />
            <input
              type="password"
              className={classes.input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading || loading2}
            />
            <FormButton text={"some text"}>
              {!loading ? (
                capitalize(subheading[0])
              ) : (
                <ClipLoader color="#ffffff" size={10} />
              )}
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
                  loading={loading2}
                />
              );
            })}
          </div>
        </form>
        <Redirect />
      </div>
    </>
  );
};

export default Register;
