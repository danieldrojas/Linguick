import React from "react";

const Quiz = () => {
  return (
    <container>
      <h1>Question</h1>
      {/* Create component for timer */}
      <h3>Timer: 60</h3>
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
