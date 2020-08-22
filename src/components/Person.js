import React from "react";

const Person = ({ personName, age, children, inputNameHandler }) => {
  return (
    <div>
      <h3>
        Hello {personName}, You'r {age} years old. {children}
      </h3>
      <input type="text" onChange={inputNameHandler} value={personName} />
    </div>
  );
};

export default Person;
