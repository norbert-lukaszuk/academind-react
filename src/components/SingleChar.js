import React from "react";
import "./SingleChar.css";
const SingleChar = ({ char, deleteCharHandler }) => {
  if (char === " ") {
    return (
      <span onClick={deleteCharHandler} className="space">
        {char}
      </span>
    );
  } else {
    return (
      <span onClick={deleteCharHandler} className="singleChar">
        {char}
      </span>
    );
  }
};

export default SingleChar;
