import React, { Component } from "react";
import DeckBuilder from "./components/Deckbuilder";

class App extends Component {
  render() {
    const mainContainer = {
      padding: "10px",
    };

    return (
      <div style={mainContainer}>
        <DeckBuilder />
      </div>
    );
  }
}

export default App;
