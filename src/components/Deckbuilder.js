import React, { Component } from "react";
import Select from "react-select";
import {
  cardOne,
  cardTwo,
  cardThree,
  cardFour,
  cardFive,
  cardSix,
  cardSeven,
  cardEight,
  cardNine,
} from "../cards/1_12";
import { Container, Row, Col } from "react-bootstrap";

export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
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

  selectFour(e) {
    this.setState({ cardFour: e.label });
  }

  selectFive(e) {
    this.setState({ cardFive: e.label });
  }

  selectSix(e) {
    this.setState({ cardSix: e.label });
  }
  selectSeven(e) {
    this.setState({ cardSeven: e.label });
  }
  selectEight(e) {
    this.setState({ cardEight: e.label });
  }
  selectNine(e) {
    this.setState({ cardNine: e.label });
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
                options={cardFour}
                onChange={this.selectFour.bind(this)}
                placeholder="#4"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardFive}
                onChange={this.selectFive.bind(this)}
                placeholder="#5"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardSix}
                onChange={this.selectSix.bind(this)}
                placeholder="#6"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardSeven}
                onChange={this.selectSeven.bind(this)}
                placeholder="#7"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardEight}
                onChange={this.selectEight.bind(this)}
                placeholder="#8"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardNine}
                onChange={this.selectNine.bind(this)}
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
          <p>{this.state.cardOne}</p>
          <p>{this.state.cardTwo}</p>
          <p>{this.state.cardThree}</p>
          <p>{this.state.cardFour}</p>
          <p>{this.state.cardFive}</p>
          <p>{this.state.cardSix}</p>
          <p>{this.state.cardSeven}</p>
          <p>{this.state.cardEight}</p>
          <p>{this.state.cardNine}</p>
        </Container>
      </div>
    );
  }
}
