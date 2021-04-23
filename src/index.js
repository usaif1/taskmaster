import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeFirebase } from "./configs/firebase";

initializeFirebase();

ReactDOM.render(<App />, document.getElementById("root"));
