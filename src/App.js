import React, { Component } from "react";
import Person from "./Person";
import { v4 as uuid } from "uuid";

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
    this.setState((prevState) => {
      const updatedState = prevState.persons.map((person) => {
        if (person.name === "Jan") {
          person.name = "Tomasz";
        }
        // else if (person.name === "Tomasz") {
        //   person.name = "Jan";
        // }
        return person;
      });
      return {
        persons: updatedState,
      };
    });
  };
  nameCLickHandler = (newName) => {
    // persons: [
    //   { name: newName, age: 25 },
    //   { name: "Tamara", age: 63 },
    // ],
    this.setState((prevState) => {
      return {
        // persons: [(prevState.persons[0]: { name: newName, age: 25 })],
      };
    });
  };
  addUserHandler = () => {
    // this.setState({
    //   persons: [...this.state.persons, { name: "Alex", age: 56 }],
    // });
    this.setState((prevState) => {
      return {
        persons: [...prevState.persons, { name: "Alex", age: 56 }],
      };
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Hello React!</h3>
        <button onClick={this.buttonClickHandler}>Change Name</button>
        <button onClick={this.addUserHandler}>Add user</button>
        {this.state.persons.map((person) => {
          return (
            <Person key={uuid()} personName={person.name} age={person.age} />
          );
        })}
      </div>
    );
  }
}
