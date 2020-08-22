import React, { Component } from "react";
import Person from "./components/Person";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    persons: [
      { id: uuid(), name: "Ewa", age: 23 },
      { id: uuid(), name: "Jan", age: 33 },
      { id: uuid(), name: "Borys", age: 13 },
    ],
    newPerson: { name: "Bogdan", age: 40 },
    listIsShowing: true,
  };

  buttonClickHandler = () => {
    this.setState((prevState) => {
      const updatedState = prevState.persons.map((person) => {
        if (person.name === "Jan") {
          return {
            ...person,
            name: "Tomasz",
            age: 45,
          };
        }

        return person;
      });
      return {
        persons: updatedState,
      };
    });
  };
  showListHandler = () => {
    const update = { ...this.state };
    this.setState({ listIsShowing: !update.listIsShowing });
    console.log(update);
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
        persons: [...prevState.persons, { id: uuid(), name: "Alex", age: 56 }],
      };
    });
  };
  inputNameHandler = (e, index) => {
    const updatedValue = e.target.value;
    let persons = [...this.state.persons];
    persons[index].name = updatedValue;
    this.setState({ persons: persons });
  };
  render() {
    console.log(this.state);
    const PersonsList = this.state.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          id={person.id}
          personName={person.name}
          age={person.age}
          inputNameHandler={(e) => this.inputNameHandler(e, index)}
        />
      );
    });
    return (
      <div>
        <h3>Hello React!</h3>
        <button onClick={this.buttonClickHandler}>Change Name</button>
        <button onClick={this.addUserHandler}>Add user</button>
        <button onClick={this.showListHandler}>Show/hide list</button>
        {this.state.listIsShowing ? PersonsList : null}
      </div>
    );
  }
}
