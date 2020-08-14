import React, { Component, useState, useEffect, useContext } from "react";
import UDQuizSore from "../../components/UDQuizScore/UDQuizScore";
import "./User.css";
import { Link } from "react-router-dom";
import API from "../../util/API";
import { UserConsumer } from '../../util/UserContext'

class User extends Component {



  state = {
    user: {
      quizzes_taken: [],
    },
    localUserName: ""
  };

  componentDidMount() {
    // const user = this.context 
    // console.log(user)

    const userInfo = JSON.parse(localStorage.getItem("UserInfo"))
    console.log(userInfo)
    
    this.setState({
      user: userInfo
    })

    // change to getUser when we have authentification worked out
    // API.getAllUsers().then((res) => {
    //   this.setState({ user: res.data[0] });
    // });
  }

  quizArray = this.state.user.quizzes_taken;

  userID = this.state.user._id

  render() {
    
    return (
      <UserConsumer>
        {(props) => {
          return <div>
            <div className="container">
              <h1>Welcome to your dashboard, {this.state.user.username} </h1>
              {/* {console.log(props.user.username)} */}
              <Link to="/leaderboard">
                <button class="sq-btn">See World Rankings</button>
              </Link>
              <Link to="/selectquiz">
                <button class="sq-btn">Take Another Quiz</button>
              </Link>
              <h2>Quizzes Taken:</h2>
              <tbody className="table">
                <tr>
                  <th>Quiz Name</th>
                  <th>Score</th>
                </tr>
                {this.state.user.quizzes_taken.map((quiz) => (
                  <UDQuizSore
                    quizId={this.state.user.quizzes_taken.indexOf(quiz)}
                    quizName={quiz.quizName}
                    score={quiz.score}
                    quizArray={this.state.user.quizzes_taken}
                    userID={this.state.user._id}
                  />
                ))}
              </tbody>
            </div>
          </div>
        }}
     
      </UserConsumer>
    );
  }
}

export default User;
