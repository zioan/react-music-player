import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
  //Reference
  //ref helps to select an element. In js normaly is document.querySelector(div...)
  const audioRef = useRef(null);
  const playSongHandler = () => {
    console.log(audioRef.current);
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={faPlay}
        />
        <FontAwesomeIcon
          className="skip-forword"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio ref={audioRef} src="{currentSong.audio}"></audio>
    </div>
  );
};

export default Player;
