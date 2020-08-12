import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";

const Timer = (props) => {
   const [timer, setTimer] = useState(100);

  useEffect(() => {
    let timerCount = timer
    const interval = setInterval(() => {
      if(props.isDone){
        clearInterval(interval)
        window.location.href = "/user"
      }
      timerCount--
      setTimer(timerCount);
      if (timerCount <= 0) {
        clearInterval(interval);
        window.location.href = "/user"
      }
    }, 1000);
  }, [timer,props.isDone]);

  return (
    <div>
      <h3>{timer}</h3>
    </div>
  );
};

export default Timer;
