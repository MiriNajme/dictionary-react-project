import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  const [play, setPlay] = useState(false);

  const audio = new Audio(props.phonetic.audio);
  const togglePlay = () => {
    setPlay(true);
    play ? audio.play() : audio.pause();
  };

  return (
    <div className="phonetic">
      <span style={{ cursor: "pointer", paddingRight: "5px" }}>
        <FontAwesomeIcon icon={faCirclePlay} onClick={togglePlay} />
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
