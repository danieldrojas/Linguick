import React, { Component, useState, useEffect } from "react";
import UDQuizSore from "../../components/UDQuizScore/UDQuizScore";
import "./User.css";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    username: "username",
    quizes: [
      { quizName: "Korean Letters", score: 100 },
      { quizName: "Korean Letters", score: 90 },
      { quizName: "Korean Letters", score: 60 },
      { quizName: "Korean Letters", score: 80 },
      { quizName: "Korean Letters", score: 70 },
    ],
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome to your dashboard, {this.state.username}</h1>
        <Link to="/leaderboard">See world rankings</Link>
        <h2>Quizzes Taken:</h2>
        <tbody className="table">
          <tr>
            <th>Quiz Name</th>
            <th>Score</th>
          </tr>
          {this.state.quizes.map((quiz) => (
            <UDQuizSore quizName={quiz.quizName} score={quiz.score} />
          ))}
        </tbody>
      </div>
    );
  }
}

export default User;
