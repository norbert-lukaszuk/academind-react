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

  buttonClickHandler = () => {
    this.setState({
      persons: [
        { name: "Ewelina", age: 25 },
        { name: "Tamara", age: 63 },
        { name: "Borys", age: 13 },
      ],
    });
  };
  nameCLickHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Tamara", age: 63 },
      ],
    });
  };
  addUserHandler = () => {
    this.setState({
      persons: [...this.state.persons, { name: "Alex", age: 56 }],
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Hello React!</h3>
        <button onClick={this.buttonClickHandler}>Change Name</button>
        <button onClick={this.addUserHandler}>Add user</button>
        <Person
          personName={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          personName={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.nameCLickHandler.bind(this, "Maciek")}
        />
      </div>
    );
  }
}
