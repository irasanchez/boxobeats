import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

//"component:" grabs the component prop from <Route component={this here} />
const PrivateRoute = ({ component: RouteComponent, ...restOfTheProps }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...restOfTheProps}
      render={routeProps => {
        //!! makes currentUser return as true or false instead of as its current value
        return !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/auth" />
        );
      }}
    />
  );
};

export default PrivateRoute;
