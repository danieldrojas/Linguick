import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../containers/Login/Login";
import Signup from "../../containers/Signup/Signup"

const LoggedOurRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route component={Login} />
      </Switch>
    </div>
  );
};

export default LoggedOurRoutes;
