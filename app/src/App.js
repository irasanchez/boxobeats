// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
//import dependencies and hooks
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import { Route, withRouter } from "react-router";

//import components
import PrivateRoute from "./components/Auth/PrivateRoute";
import Landing from "./components/Views/Landing";
import Progress from "./components/Views/Progress";
import Improv from "./components/Views/Improv";
import Create from "./components/Views/Create";
import Focus from "./components/Views/Focus";
import Account from "./components/Views/Account";
import Header from "./components/Header";
import Metronome from "./components/Metronome";
import Nav from "./components/Nav";
import Auth from "./components/Auth/Auth";

//hooks
import useFetchBeats from "./hooks/useFetchBeats";

const App = props => {
  const beats = useFetchBeats();

  const [modalState, setModalState] = useState(false);
  const toggleModal = () => setModalState(!modalState);

  return (
    <div>
      <Header {...props} />

      <PrivateRoute exact path="/" component={Landing} />
      <Route exact path="/auth" component={Auth} />

      <Route
        path="/progress"
        render={props => <Progress beats={beats} {...props} />}
      />

      <Route
        path="/improv"
        render={props => {
          return <Improv beats={beats} {...props} />;
        }}
      />

      <Route
        path="/create"
        render={props => {
          return <Create beats={beats} {...props} />;
        }}
      />

      <Route
        exact
        path="/focus"
        render={props => {
          return <Focus beats={beats} {...props} />;
        }}
      />

      <Route
        exact
        path="/account"
        render={props => {
          return <Account {...props} />;
        }}
      />

      <Metronome toggleModal={toggleModal} modalState={modalState} />

      <Nav toggleModal={toggleModal} />
    </div>
  );
};

//withRouter gives App access to location prop. if <Component /> is not inside of a <Route /> then it doesn't have access to location, match, etc.
export default withRouter(App);
