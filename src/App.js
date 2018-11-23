import React, { Component } from 'react';
import Welcome from "./components/welcome";
import Hello from "./components/hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome from App.
        <Welcome name="bashir" lastName="shallah">Description</Welcome>
        <Hello name="bashir" />
      </div>
    );
  }
}

export default App;
