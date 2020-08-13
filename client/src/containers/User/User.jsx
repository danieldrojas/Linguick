import React, { Component, useState, useEffect } from "react";
import UDQuizSore from "../../components/UDQuizScore/UDQuizScore";
import "./User.css";
import { Link } from "react-router-dom";
import API from "../../util/API";

class User extends Component {
  state = {
    user: {
      quizzes_taken: []
    }
  };

  componentDidMount() {
    // change to getUser when we have authentification worked out
    API.getAllUsers().then((res) => {
      this.setState({user: res.data[1]})
      console.log(this.state.user.quizzes_taken)
    }
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to your dashboard, {this.state.user.username}</h1>
        <Link to="/leaderboard">See world rankings</Link>
        <h2>Quizzes Taken:</h2>
        <tbody className="table">
          <tr>
            <th>Quiz Name</th>
            <th>Score</th>
          </tr>
          {this.state.user.quizzes_taken.map(quiz => (
            <UDQuizSore quizName={quiz.quizName} score={quiz.score} />
          ))}
        </tbody>
      </div>
    );
  }
}

export default User;
