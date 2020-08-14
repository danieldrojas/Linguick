import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./util/UserContext";
import LoggedInRoutes from './components/LoggedInRoutes/LoggedInRoutes'
import LoggedOutRoutes from './components/LoggedOutRoutes/LoggedOutRoutes'

import "./App.css";
function App() {

  const [user, setUser] = useState({})

  let isLoggedIn = false;

  if (JSON.parse(localStorage.getItem("UserInfo"))){
    isLoggedIn = true
    //console.log("Logged in")
  } else {
   // console.log("Not logged in")
   
  }
 
  return (
    <div id="body">
      <Router>

        <UserProvider value={{user, setUser}}>

          <Navbar isLoggedIn={isLoggedIn}/>
          {isLoggedIn ? (
            <LoggedInRoutes />
          ) : (
            <LoggedOutRoutes />
          )}
          
          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/quiz" component={Quiz} />
            <Route path="/quiz/:id" component={Quiz} />
            <Route exact path="/selectquiz" component={SelectQuiz} />
            <Route exact path="/updateuser" component={UpdateUser} />
            <Route exact path="/user" component={User} />
            <Route component={NoMatch} />
          </Switch> */}
        </UserProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
