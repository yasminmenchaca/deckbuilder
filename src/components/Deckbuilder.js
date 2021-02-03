import React, { Component } from "react";
import Select from "react-select";
import { cardOne, cardTwo, cardThree } from "../cards/1_12";
import { Container, Row, Col, Table } from "react-bootstrap";

export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
    };
  }

  selectOne(e) {
    this.setState({ cardOne: e.label });
  }

  selectTwo(e) {
    this.setState({ cardTwo: e.label });
  }

  selectThree(e) {
    this.setState({ cardThree: e.label });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <Select
                options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#1"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#2"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#3"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#4"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#5"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#6"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#7"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#8"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#9"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#10"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#11"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#12"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#13"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#14"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#15"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#16"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#17"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#18"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#19"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#20"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#21"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#22"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#23"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#34"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#25"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#26"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#27"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                // options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#28"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#29"
              />
            </Col>
            <Col>
              {" "}
              <Select
                // options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#30"
              />
            </Col>
          </Row>
          <br />
          <p>#1 - {this.state.cardOne}</p>
          <p>#2 - {this.state.cardTwo}</p>
          <p>#3 - {this.state.cardThree}</p>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Card</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.state.cardOne}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{this.state.cardTwo}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{this.state.cardThree}</td>
              </tr>
            </tbody>
          </Table> */}
        </Container>
      </div>
    );
  }
}
