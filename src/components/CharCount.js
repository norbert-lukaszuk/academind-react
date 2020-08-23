import React from "react";

const CharCount = ({ count }) => {
  if (count >= 5) {
    return <h3>It's long enough</h3>;
  } else {
    return <h3>It's not enough long</h3>;
  }
};

export default CharCount;
