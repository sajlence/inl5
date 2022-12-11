import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
