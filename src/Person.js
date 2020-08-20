import React from "react";

const Person = ({ personName, age, children, click }) => {
  return (
    <div>
      <h3 onClick={click}>
        Hello {personName}, You'r {age} years old. {children}
      </h3>
    </div>
  );
};

export default Person;
