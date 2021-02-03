import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
