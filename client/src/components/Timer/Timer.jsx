import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";

const Timer = (props) => {
  const [timer, setTimer] = useState([]);
  const [timerActive, setTimerActive] = useState([]);

  useEffect(() => {
    setTimerActive(true);
    let timerCount = props.time;
    const interval = setInterval(() => {
      setTimer(timerCount);
      timerCount = timerCount - 1;
      if (timerCount < 0) {
        setTimerActive(false);
        clearInterval(interval);
        // return <Redirect push to="./user" />;
      }
    }, 1000);
  }, []);
  //   const timerStop = () => {}
  return (
    <div>
      <h3>{timer}</h3>
      {timerActive === false && (
        <Link to="/user">
          <button>See results</button>
        </Link>
      )}
    </div>
  );
};

export default Timer;
