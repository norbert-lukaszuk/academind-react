import React from "react";

const Person = ({ personName, age, children }) => {
  return (
    <div>
      <h3>
        Hello {personName}, You'r {age} years old. {children}
      </h3>
    </div>
  );
};

export default Person;
