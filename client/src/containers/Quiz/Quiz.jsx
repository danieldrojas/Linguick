import React, {useEffect} from "react";
import API from '../../util/API'
import Timer from '../../components/Timer/Timer'

const Quiz = () => {

  useEffect(() => {
    API.getQuestions().then(({data}) => {
      console.log("this is my questions from database: ", data)
    }).catch((err) => {
      console.log(err)
    })
  })

  return (
    <container>
      <h1>Question</h1>
      {/* Create component for timer */}
      <Timer time='60' />
      <p>Character goes here</p>
      {/* Create component for question choice */}
      <button>Choice 1</button>
      <button>Choice 2</button>
      <button>Choice 3</button>
      <button>Choice 4</button>
    </container>
  );
};

export default Quiz;
