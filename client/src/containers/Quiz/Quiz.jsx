import React from "react";
import Timer from '../../components/Timer/Timer'

const Quiz = () => {
  return (
    <div className="container">
      <h1>Question</h1>
      {/* Create component for timer */}
      <Timer time='60' />
      <p>Character goes here</p>
      {/* Create component for question choice */}
      <button>Choice 1</button>
      <button>Choice 2</button>
      <button>Choice 3</button>
      <button>Choice 4</button>
    </div>
  );
};

export default Quiz;
