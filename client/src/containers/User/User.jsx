import React, { useState, useEffect } from "react";

const User = () => {
    return (
        <div className="container">
            <h1>Welcome to your dashboard, username</h1>
            <p>See world rankings</p>
            <h2>Quizzes Taken:</h2>
            <ul>
                {/* Create component for each quiz score */}
                <li>Quiz name: score</li>
                <li>Quiz name: score</li>
                <li>Quiz name: score</li>
                <li>Quiz name: score</li>
            </ul>
        </div>
    );
};

export default User;