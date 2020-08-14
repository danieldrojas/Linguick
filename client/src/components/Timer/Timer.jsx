import React, { useState, useEffect, useContext } from "react";
import API from "../../util/API";
//import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import  UserContext from "../../util/UserContext"

const Timer = (props) => {
  const [timer, setTimer] = useState(100);
  const { user, setUser} = useContext(UserContext)

  useEffect(() => {
    let timerCount = timer;
    console.log(user)
    const interval = setInterval(() => {
      if (props.isDone) {
        clearInterval(interval);
        //update the user

        //get the current user
        // NEED TO REPLACE IT WITH GET 1 USER SOON
        API.getUser(user._id)
          .then((res) => {
            //get the data for the users quizzes_taken object
            let quizes = res.data.quizzes_taken;
            //push the new scores into the database
            quizes.push({
              // quizId: props.quizId,
              score: timerCount,
              quizName: props.quizName,
            });
            //updates the scores 
            API.updateUser(user._id, { quizzes_taken: quizes })
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
