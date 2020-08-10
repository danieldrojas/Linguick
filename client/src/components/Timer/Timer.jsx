import React, { useState, useEffect } from "react";

const Timer = (props) => {
  let timerCount = props.time;
  const [timer, setTimer] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timerCount);
      timerCount = timerCount - 1;
      if (timerCount < 0) {
          return
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h3>{timer}</h3>
    </div>
  );
};

export default Timer;
