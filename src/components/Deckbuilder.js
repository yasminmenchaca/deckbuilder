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
  cardTen,
  cardEleven,
  cardTwelve,
} from "../cards/1_12";
import {
  cardThirteen,
  cardFourteen,
  cardFifteen,
  cardSixteen,
  cardSeventeen,
  cardEighteen,
  cardNineteen,
  cardTwenty,
  cardTwentyOne,
} from "../cards/13_21";
import {
  cardTwentyTwo,
  cardTwentyThree,
  cardTwentyFour,
  cardTwentyFive,
  cardTwentySix,
  cardTwentySeven,
  cardTwentyEight,
  cardTwentyNine,
  cardThirty,
} from "../cards/22_30";
import { entrance, spectacle } from "../cards/entrance";
import { competitors } from "../cards/competitors";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Card = styled.li`
  /* list-style: none; */
`;

const Text = styled.p`
  color: green;
`;

export default class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
    };
  }

  selectOne(e) {
    this.setState({ cardOne: e.value });
  }
  selectTwo(e) {
    this.setState({ cardTwo: e.value });
  }
  selectThree(e) {
    this.setState({ cardThree: e.value });
  }
  selectFour(e) {
    this.setState({ cardFour: e.value });
  }
  selectFive(e) {
    this.setState({ cardFive: e.value });
  }
  selectSix(e) {
    this.setState({ cardSix: e.value });
  }
  selectSeven(e) {
    this.setState({ cardSeven: e.value });
  }
  selectEight(e) {
    this.setState({ cardEight: e.value });
  }
  selectNine(e) {
    this.setState({ cardNine: e.value });
  }
  selectTen(e) {
    this.setState({ cardTen: e.value });
  }
  selectEleven(e) {
    this.setState({ cardEleven: e.value });
  }
  selectTwelve(e) {
    this.setState({ cardTwelve: e.value });
  }
  selectThirteen(e) {
    this.setState({ cardThirteen: e.value });
  }
  selectFourteen(e) {
    this.setState({ cardFourteen: e.value });
  }
  selectFifteen(e) {
    this.setState({ cardFifteen: e.value });
  }
  selectSixteen(e) {
    this.setState({ cardSixteen: e.value });
  }
  selectSeventeen(e) {
    this.setState({ cardSeventeen: e.value });
  }
  selectEighteen(e) {
    this.setState({ cardEighteen: e.value });
  }
  selectNineteen(e) {
    this.setState({ cardNineteen: e.value });
  }
  selectTwenty(e) {
    this.setState({ cardTwenty: e.value });
  }
  selectTwentyOne(e) {
    this.setState({ cardTwentyOne: e.value });
  }
  selectTwentyTwo(e) {
    this.setState({ cardTwentyTwo: e.value });
  }
  selectTwentyThree(e) {
    this.setState({ cardTwentyThree: e.value });
  }
  selectTwentyFour(e) {
    this.setState({ cardTwentyFour: e.value });
  }
  selectTwentyFive(e) {
    this.setState({ cardTwentyFive: e.value });
  }
  selectTwentySix(e) {
    this.setState({ cardTwentySix: e.value });
  }
  selectTwentySeven(e) {
    this.setState({ cardTwentySeven: e.value });
  }
  selectTwentyEight(e) {
    this.setState({ cardTwentyEight: e.value });
  }
  selectTwentyNine(e) {
    this.setState({ cardTwentyNine: e.value });
  }
  selectThirty(e) {
    this.setState({ cardThirty: e.value });
  }
  selectCompetitors(e) {
    this.setState({ competitors: e.value });
  }
  selectEntrance(e) {
    this.setState({ entrance: e.value });
  }
  selectSpectacle(e) {
    this.setState({ spectacle: e.value });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={competitors}
                onChange={this.selectCompetitors.bind(this)}
                placeholder="Competitor"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={entrance}
                onChange={this.selectEntrance.bind(this)}
                placeholder="Entrance"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={spectacle}
                onChange={this.selectSpectacle.bind(this)}
                placeholder="Spectacle"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardOne}
                onChange={this.selectOne.bind(this)}
                placeholder="#1"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwo}
                onChange={this.selectTwo.bind(this)}
                placeholder="#2"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardThree}
                onChange={this.selectThree.bind(this)}
                placeholder="#3"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardFour}
                onChange={this.selectFour.bind(this)}
                placeholder="#4"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardFive}
                onChange={this.selectFive.bind(this)}
                placeholder="#5"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardSix}
                onChange={this.selectSix.bind(this)}
                placeholder="#6"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardSeven}
                onChange={this.selectSeven.bind(this)}
                placeholder="#7"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardEight}
                onChange={this.selectEight.bind(this)}
                placeholder="#8"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardNine}
                onChange={this.selectNine.bind(this)}
                placeholder="#9"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTen}
                onChange={this.selectTen.bind(this)}
                placeholder="#10"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardEleven}
                onChange={this.selectEleven.bind(this)}
                placeholder="#11"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwelve}
                onChange={this.selectTwelve.bind(this)}
                placeholder="#12"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardThirteen}
                onChange={this.selectThirteen.bind(this)}
                placeholder="#13"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardFourteen}
                onChange={this.selectFourteen.bind(this)}
                placeholder="#14"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardFifteen}
                onChange={this.selectFifteen.bind(this)}
                placeholder="#15"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardSixteen}
                onChange={this.selectSixteen.bind(this)}
                placeholder="#16"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardSeventeen}
                onChange={this.selectSeventeen.bind(this)}
                placeholder="#17"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardEighteen}
                onChange={this.selectEighteen.bind(this)}
                placeholder="#18"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardNineteen}
                onChange={this.selectNineteen.bind(this)}
                placeholder="#19"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwenty}
                onChange={this.selectTwenty.bind(this)}
                placeholder="#20"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyOne}
                onChange={this.selectTwentyOne.bind(this)}
                placeholder="#21"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyTwo}
                onChange={this.selectTwentyTwo.bind(this)}
                placeholder="#22"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyThree}
                onChange={this.selectTwentyThree.bind(this)}
                placeholder="#23"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyFour}
                onChange={this.selectTwentyFour.bind(this)}
                placeholder="#24"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyFive}
                onChange={this.selectTwentyFive.bind(this)}
                placeholder="#25"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentySix}
                onChange={this.selectTwentySix.bind(this)}
                placeholder="#26"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentySeven}
                onChange={this.selectTwentySeven.bind(this)}
                placeholder="#27"
              />
            </Col>
          </Row>

          <Row>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyEight}
                onChange={this.selectTwentyEight.bind(this)}
                placeholder="#28"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardTwentyNine}
                onChange={this.selectTwentyNine.bind(this)}
                placeholder="#29"
              />
            </Col>
            <Col sm style={{ paddingBottom: "5px" }}>
              {" "}
              <Select
                options={cardThirty}
                onChange={this.selectThirty.bind(this)}
                placeholder="#30"
              />
            </Col>
          </Row>

          <br />
          <p>
            Competitor: <span>{this.state.competitors}</span>
          </p>
          <p>
            Entrance: <span>{this.state.entrance}</span>
          </p>
          <p>
            Spectacle Affiliation: <span>{this.state.spectacle}</span>
          </p>
          <p>Deck List:</p>
          <ol>
            <Card>{this.state.cardOne}</Card>
            <Card>{this.state.cardTwo}</Card>
            <Card>{this.state.cardThree}</Card>
            <Card>{this.state.cardFour}</Card>
            <Card>{this.state.cardFive}</Card>
            <Card>{this.state.cardSix}</Card>
            <Card>{this.state.cardSeven}</Card>
            <Card>{this.state.cardEight}</Card>
            <Card>{this.state.cardNine}</Card>
            <Card>{this.state.cardTen}</Card>
            <Card>{this.state.cardEleven}</Card>
            <Card>{this.state.cardTwelve}</Card>
            <Card>{this.state.cardThirteen}</Card>
            <Card>{this.state.cardFourteen}</Card>
            <Card>{this.state.cardFifteen}</Card>
            <Card>{this.state.cardSixteen}</Card>
            <Card>{this.state.cardSeventeen}</Card>
            <Card>{this.state.cardEighteen}</Card>
            <Card>{this.state.cardNineteen}</Card>
            <Card>{this.state.cardTwenty}</Card>
            <Card>{this.state.cardTwentyOne}</Card>
            <Card>{this.state.cardTwentyTwo}</Card>
            <Card>{this.state.cardTwentyThree}</Card>
            <Card>{this.state.cardTwentyFour}</Card>
            <Card>{this.state.cardTwentyFive}</Card>
            <Card>{this.state.cardTwentySix}</Card>
            <Card>{this.state.cardTwentySeven}</Card>
            <Card>{this.state.cardTwentyEight}</Card>
            <Card>{this.state.cardTwentyNine}</Card>
            <Card>{this.state.cardThirty}</Card>
          </ol>
        </Container>
      </div>
    );
  }
}
