import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";

const Timer = (props) => {
   const [timer, setTimer] = useState(100);

  useEffect(() => {
    let timerCount = timer
    const interval = setInterval(() => {
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
