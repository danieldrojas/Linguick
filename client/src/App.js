import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./util/UserContext";
import LoggedInRoutes from "./components/LoggedInRoutes/LoggedInRoutes";
import LoggedOutRoutes from "./components/LoggedOutRoutes/LoggedOutRoutes";

import "./App.css";
function App() {
  const [user, setUser] = useState({});

  let isLoggedIn = false;

  // check if there is currently data for a user in local storage and set true if so
  if (JSON.parse(localStorage.getItem("UserInfo"))) {
    isLoggedIn = true;
  }

  return (
    <div id="body">
      <Router>
        <UserProvider value={{ user, setUser }}>
          {/* sends data on whether user is logged in to navbar component */}
          <Navbar isLoggedIn={isLoggedIn} />
          {/* checks if the user is logged in and sets the routes thusly */}
          {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </UserProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
