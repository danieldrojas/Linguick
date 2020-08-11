import React, { useState, useEffect } from "react";
import Axios from "axios";
//import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";

const Timer = (props) => {
   const [timer, setTimer] = useState(100);

  useEffect(() => {
    let timerCount = timer
    const interval = setInterval(() => {
      if(props.isDone){
        clearInterval(interval)
        window.location.href = "/leaderboard"
      }
      timerCount--
      setTimer(timerCount);
      if (timerCount <= 0) {
        clearInterval(interval);
        window.location.href = "/leaderboard"
      }
    }, 1000);
  }, [timer]);

  return (
    <div>
      <h3>{timer}</h3>
    </div>
  );
};

export default Timer;
