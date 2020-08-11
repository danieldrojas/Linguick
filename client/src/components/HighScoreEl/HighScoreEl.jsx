import React from 'react';

const HighScoreEl = (props) => {
    return (
        <li>{props.username}: {props.score}</li>
    );
};

export default HighScoreEl;