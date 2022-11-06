import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  console.log(props.phonetic);
  const [play, setPlay] = useState(false);

  const audio = new Audio(props.phonetic.audio);
  const togglePlay = () => {
    setPlay(true);
    audio.play();
  };

  return (
    <div className="phonetic">
      {props.phonetic.text}
      <span
        style={{ cursor: "pointer", marginLeft: "5px" }}
        onClick={togglePlay}
      >
        <FontAwesomeIcon icon={faCirclePlay} />
      </span>
    </div>
  );
}
