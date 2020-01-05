import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./components/Auth/Auth";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <Auth>
    <Router>
      <App />
    </Router>
  </Auth>,
  document.getElementById("root")
);
