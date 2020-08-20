import React, { Component } from "react";
import Person from "./Person";

export default class App extends Component {
  state = {
    persons: [
      { name: "Ewa", age: 23 },
      { name: "Jan", age: 33 },
      { name: "Borys", age: 13 },
    ],
    newPerson: { name: "Bogdan", age: 40 },
  };
  render() {
    console.log(this.state);
    const buttonClickHandler = () => {
      this.setState({
        persons: [
          { name: "Ewelina", age: 25 },
          { name: "Jan", age: 33 },
          { name: "Borys", age: 13 },
        ],
      });
    };
    return (
      <div>
        <h3>Hello React!</h3>
        <button onClick={buttonClickHandler}>Change Name</button>
        <Person
          personName={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
      </div>
    );
  }
}
