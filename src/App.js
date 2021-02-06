import React, { Component } from "react";
import DeckBuilder from "./components/Deckbuilder";
import Stops from "./components/Stops";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    const mainContainer = {
      paddingTop: "10px",
    };

    return (
      <div>
        <NavBar />
        <div style={mainContainer}>
          <DeckBuilder />
          {/* <Stops /> */}
        </div>
      </div>
    );
  }
}

export default App;
