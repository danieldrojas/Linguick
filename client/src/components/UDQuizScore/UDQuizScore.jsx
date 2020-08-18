import React from "react";
import API from "../../util/API";

const UDQuizScore = (props) => {
  const deleteScore = function (event) {
    event.preventDefault();
    // get the id of quiz to delete from props
    const idToDelete = props.quizId;
    // creates a temporary array of quizzes that are not the one being deleted
    const tempArray = props.quizArray.filter(function (quiz) {
      return props.quizArray.indexOf(quiz) !== idToDelete;
    });
    // sets the quizzes taken in the user database to the list without the deleted quiz
    API.updateUser(props.userID, { quizzes_taken: tempArray }).then(
      // relaods page with new quiz data
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
