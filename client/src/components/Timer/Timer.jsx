import React, { useState, useEffect } from "react";
import API from "../../util/API";
//import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";

const Timer = (props) => {
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    let timerCount = timer;
    const interval = setInterval(() => {
      if (props.isDone) {
        clearInterval(interval);
        //update the user

        //get the current user
        // NEED TO REPLACE IT WITH GET 1 USER SOON
        API.getAllUsers()
          .then((res) => {
            //get the data for the users quizzes_taken object
            let quizes = res.data[0].quizzes_taken;
            //push the new scores into the database
            quizes.push({
              quizId: props.quizId,
              score: timerCount,
              quizName: props.quizName,
            });
            //updates the scores 
            API.updateUser(res.data[0]._id, { quizzes_taken: quizes })
              .then((res) => {
                //go to next page
                window.location.href = "/user";
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
      timerCount--;
      setTimer(timerCount);
      if (timerCount <= 0) {
        clearInterval(interval);

        window.location.href = "/user";
      }
    }, 1000);
  }, [timer, props.isDone, props.quizName]);
  return (
    <div>
      <h3>{timer}</h3>
    </div>
  );
};

export default Timer;
