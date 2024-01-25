import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeckBuilder from "./components/Deckbuilder";
import Stops from "./components/Stops";
import NavBar from "./components/NavBar";
import "./App.css";
import MoreStops from "./components/MoreStops";

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
            <Routes>
              <Route path="/" element={<DeckBuilder />}></Route>
              <Route path="/stops" element={<Stops />}></Route>
              <Route path="/morestops" element={<MoreStops />}></Route>
              <Route component={DeckBuilder} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;