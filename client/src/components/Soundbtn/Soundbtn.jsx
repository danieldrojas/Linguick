import React, { useEffect, useState } from "react";

const Soundbtn = (props) => {
  const [sound, setSound] = useState([]);

  useEffect(() => {
    let msg = new SpeechSynthesisUtterance(props.sound);
    msg.voice = speechSynthesis.getVoices()[13];
    msg.lang = "ko-KR";
    setSound(msg);
  }, [props.sound]);

  function handleClick(event) {
    event.preventDefault();
    window.speechSynthesis.speak(sound);
  }

  return (
    <div>
      <button onClick={handleClick} className = "btn" id = "sound">Play Sound</button>
    </div>
  );
};

export default Soundbtn;
