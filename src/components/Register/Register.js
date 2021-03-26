//dependencies
import React from "react";
import { useLocation } from "react-router-dom";

//imports
import CentralHeading from "../common/CentralHeading/CentralHeading";
import CentralSubheading from "../common/CentralSubheading/CentralSubheading";
import FormButton from "../common/FormButton/FormButton";
import { useStyles } from "./styles";

const Register = () => {
  const classes = useStyles();
  const location = useLocation();
  const subheading = location.pathname.match(/[a-zA-Z]+/g);

  // function to capitalize first letter of string
  const capitalize = (subheading) => {
    var splitStr = subheading.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  return (
    <>
      <CentralHeading title={`TaskMaster`} size={`5rem`} />
      <div className={classes.formContainer}>
        <CentralSubheading
          title={`${capitalize(subheading[0])}`}
          size={`2rem`}
        />
        <form className={classes.form}>
          <div className={classes.inputContainer}>
            <input type="text" className={classes.input} placeholder="Email" />
            <input
              type="password"
              className={classes.input}
              placeholder="Password"
            />
            <input
              type="password"
              className={classes.input}
              placeholder="Enter Password Again"
            />
            <FormButton text={"some text"}>
              {capitalize(subheading[0])}
            </FormButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
