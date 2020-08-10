import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState([]);
  useEffect(() => {
    let timerCount = props.time;
    const interval = setInterval(() => {
      setTimer(timerCount);
      timerCount = timerCount - 1;
      if (timerCount < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, []);
//   const timerStop = () => {}
  return (
    <div>
      <h3>{timer}</h3>
      {/* <button onClick={timerStop}>Test stop timer</button> */}
    </div>
  );
};

export default Timer;
