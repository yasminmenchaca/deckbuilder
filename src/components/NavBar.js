import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Deck Builder</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
