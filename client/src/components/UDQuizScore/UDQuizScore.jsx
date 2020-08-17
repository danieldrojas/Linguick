import React from "react";
import API from "../../util/API";

const UDQuizScore = (props) => {
  const deleteScore = function (event) {
    event.preventDefault();
    const idToDelete = props.quizId;
    console.log(idToDelete)
    const tempArray = props.quizArray.filter(function (quiz) {
      return props.quizArray.indexOf(quiz) !== idToDelete;
    });
    API.updateUser(props.userID, { quizzes_taken: tempArray }).then(
      window.location.reload()
    );
  };

  return (
    <tr>
      <td className="quizNameCol">{props.quizName}</td>
      <td className="scoreCol">{props.score}</td>
      <td className="scoreCol" id="deleteBtnEl">
        <button className="delete" onClick={deleteScore}>
          <i className="material-icons">clear</i>
        </button>
      </td>
    </tr>
  );
};

export default UDQuizScore;
