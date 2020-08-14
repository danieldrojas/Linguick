import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "../../containers/User/User";
import Home from "../../containers/Home/Home";
import Leaderboard from "../../containers/Leaderboard/Leaderboard";
import Quiz from "../../containers/Quiz/Quiz";
import SelectQuiz from "../../containers/SelectQuiz/SelectQuiz";
import UpdateUser from "../../containers/UpdateUser/UpdateUser";
import NoMatch from "../../containers/NoMatch/NoMatch";

const LoggedInRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/quiz" component={Quiz} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route exact path="/selectquiz" component={SelectQuiz} />
        <Route exact path="/updateuser" component={UpdateUser} />
        <Route exact path="/user" component={User} />
        <Route exact path="/signup" component={User} />
        <Route exact path="/login" component={User} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default LoggedInRoutes;
