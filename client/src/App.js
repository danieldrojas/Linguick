import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Leaderboard from "./containers/Leaderboard/Leaderboard";
import Login from "./containers/Login/Login";
import Quiz from "./containers/Quiz/Quiz";
import SelectQuiz from "./containers/SelectQuiz/SelectQuiz";
import Signup from "./containers/Signup/Signup";
import UpdateUser from "./containers/UpdateUser/UpdateUser";
import User from "./containers/User/User";
import NoMatch from "./containers/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UserContext from "./util/UserContext";
import API from "./util/API";


function App() {


  const [user, setUser] = useState({
    name: "",
    email: "",
    total_scores: 91,
  })

  useEffect(() => {

    loadUsers()
  
  }, []);


   

  function loadUsers() {
    API.getUserInfo("5f32d8a63ee8e5c604b93ac1")
      .then((res) => {
        console.log("testing user from db: ", res)
        setUser(res)
    })
  }
  
  //with email with can find the user in data base to access database info

  
  return (
    <>
      <Router>
        <UserContext.Provider value={user}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/selectquiz" component={SelectQuiz} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/updateuser" component={UpdateUser} />
          <Route exact path="/user" component={User} />
          <Route component={NoMatch} />
          </Switch>
        </UserContext.Provider>
      </Router>
      <Footer />
    </>
  );
}

export default App;