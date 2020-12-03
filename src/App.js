import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super(); // This gives us access to state by calling constructor method on Component class

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//on setState, render is called again. It still maintains the unidirectional data flow
//state turns into props when it is passed down
//setState is asynchronous - so every time a value is input, it will be one letter behind.
//setState is not happening immediately - so what we do to log our state is to send setState a second argument of a callback function

//Synthetic event - what we pretend is a DOM event, but is actually React telling us ABOUT a DOM event and asking us what to do

//In handleChange, passed down as a prop, state is maintained for the purely presentational searchbox. This searchbox is usable for literally any search now, in any component that wants to grab it.

export default App;
