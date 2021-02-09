import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DeckBuilder from "./components/Deckbuilder";
import Stops from "./components/Stops";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    const mainContainer = {
      paddingTop: "10px",
    };

    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <div style={mainContainer}>
            <Switch>
              <Route exact path="/deckbuilder" component={DeckBuilder} />
              <Route exact path="/deckbuilder/stops" component={Stops} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
