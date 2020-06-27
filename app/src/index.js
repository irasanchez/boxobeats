import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/reducer";
import thunk from "redux-thunk";
import { CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { black, blue, red, gray, purple, brown } from "./assets/colors";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(thunk));

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: purple,
    secondary: blue,
    error: red,
    warning: brown,
    info: gray,
    success: blue,
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
