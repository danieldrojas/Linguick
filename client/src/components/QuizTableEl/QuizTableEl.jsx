import React from "react";
import HighScoreEl from "../../components/HighScoreEl/HighScoreEl";

const QuizTableEl = (props) => {
  return (
    <HighScoreEl
      rank={props.rank}
      username={props.username}
      score={props.score}
    />
  );
};

export default QuizTableEl;
