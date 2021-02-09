import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
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
      <HashRouter>
        <div>
          <NavBar />
          <div style={mainContainer}>
            <Switch>
              <Route exact path="/" render={() => <DeckBuilder />} />
              <Route exact path="/stops" render={() => <Stops />} />
              <Route component={DeckBuilder}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
