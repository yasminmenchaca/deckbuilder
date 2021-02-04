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
  selectTen(e) {
    this.setState({ cardTen: e.label });
  }
  selectEleven(e) {
    this.setState({ cardEleven: e.label });
  }
  selectTwelve(e) {
    this.setState({ cardTwelve: e.label });
  }
  selectThirteen(e) {
    this.setState({ cardThirteen: e.label });
  }
  selectFourteen(e) {
    this.setState({ cardFourteen: e.label });
  }
  selectFifteen(e) {
    this.setState({ cardFifteen: e.label });
  }
  selectSixteen(e) {
    this.setState({ cardSixteen: e.label });
  }
  selectSeventeen(e) {
    this.setState({ cardSeventeen: e.label });
  }
  selectEighteen(e) {
    this.setState({ cardEighteen: e.label });
  }
  selectNineteen(e) {
    this.setState({ cardEighteen: e.label });
  }
  selectTwenty(e) {
    this.setState({ cardNineteen: e.label });
  }
  selectTwentyOne(e) {
    this.setState({ cardTwenty: e.label });
  }
  selectTwentyTwo(e) {
    this.setState({ cardTwentyTwo: e.label });
  }
  selectTwentyThree(e) {
    this.setState({ cardTwentyThree: e.label });
  }
  selectTwentyFour(e) {
    this.setState({ cardTwentyFour: e.label });
  }
  selectTwentyFive(e) {
    this.setState({ cardTwentyFive: e.label });
  }
  selectTwentySix(e) {
    this.setState({ cardTwentySix: e.label });
  }
  selectTwentySeven(e) {
    this.setState({ cardTwentySeven: e.label });
  }
  selectTwentyEight(e) {
    this.setState({ cardTwentyEight: e.label });
  }
  selectTwentyNine(e) {
    this.setState({ cardTwentyNine: e.label });
  }
  selectThirty(e) {
    this.setState({ cardThirty: e.label });
  }
  selectCompetitors(e) {
    this.setState({ competitors: e.label });
  }
  selectEntrance(e) {
    this.setState({ entrance: e.label });
  }
  selectSpectacle(e) {
    this.setState({ spectacle: e.label });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <Select
                options={competitors}
                onChange={this.selectCompetitors.bind(this)}
                placeholder="Competitor"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={entrance}
                onChange={this.selectEntrance.bind(this)}
                placeholder="Entrance"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={spectacle}
                onChange={this.selectSpectacle.bind(this)}
                placeholder="Spectacle"
              />
            </Col>
          </Row>

          <br />
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
                options={cardTen}
                onChange={this.selectTen.bind(this)}
                placeholder="#10"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardEleven}
                onChange={this.selectEleven.bind(this)}
                placeholder="#11"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwelve}
                onChange={this.selectTwelve.bind(this)}
                placeholder="#12"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardThirteen}
                onChange={this.selectThirteen.bind(this)}
                placeholder="#13"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardFourteen}
                onChange={this.selectFourteen.bind(this)}
                placeholder="#14"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardFifteen}
                onChange={this.selectFifteen.bind(this)}
                placeholder="#15"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardSixteen}
                onChange={this.selectSixteen.bind(this)}
                placeholder="#16"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardSeventeen}
                onChange={this.selectSeventeen.bind(this)}
                placeholder="#17"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardEighteen}
                onChange={this.selectEighteen.bind(this)}
                placeholder="#18"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardNineteen}
                onChange={this.selectNineteen.bind(this)}
                placeholder="#19"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwenty}
                onChange={this.selectTwenty.bind(this)}
                placeholder="#20"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwentyOne}
                onChange={this.selectTwentyOne.bind(this)}
                placeholder="#21"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardTwentyTwo}
                onChange={this.selectTwentyTwo.bind(this)}
                placeholder="#22"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwentyThree}
                onChange={this.selectTwentyThree.bind(this)}
                placeholder="#23"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwentyFour}
                onChange={this.selectTwentyFour.bind(this)}
                placeholder="#24"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardTwentyFive}
                onChange={this.selectTwentyFive.bind(this)}
                placeholder="#25"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwentySix}
                onChange={this.selectTwentySix.bind(this)}
                placeholder="#26"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwentySeven}
                onChange={this.selectTwentySeven.bind(this)}
                placeholder="#27"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              {" "}
              <Select
                options={cardTwentyEight}
                onChange={this.selectTwentyEight.bind(this)}
                placeholder="#28"
              />
            </Col>
            <Col>
              {" "}
              <Select
                options={cardTwentyNine}
                onChange={this.selectTwentyNine.bind(this)}
                placeholder="#29"
              />
            </Col>
            <Col>
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
          <p>{this.state.cardOne}</p>
          <p>{this.state.cardTwo}</p>
          <p>{this.state.cardThree}</p>
          <p>{this.state.cardFour}</p>
          <p>{this.state.cardFive}</p>
          <p>{this.state.cardSix}</p>
          <p>{this.state.cardSeven}</p>
          <p>{this.state.cardEight}</p>
          <p>{this.state.cardNine}</p>
          <p>{this.state.cardTen}</p>
          <p>{this.state.cardEleven}</p>
          <p>{this.state.cardTwelve}</p>
          <p>{this.state.cardThirteen}</p>
          <p>{this.state.cardFourteen}</p>
          <p>{this.state.cardFifteen}</p>
          <p>{this.state.cardSixteen}</p>
          <p>{this.state.cardSeventeen}</p>
          <p>{this.state.cardEighteen}</p>
          <p>{this.state.cardNineteen}</p>
          <p>{this.state.cardTwenty}</p>
          <p>{this.state.cardTwentyOne}</p>
          <p>{this.state.cardTwentyTwo}</p>
          <p>{this.state.cardTwentyThree}</p>
          <p>{this.state.cardTwentyFour}</p>
          <p>{this.state.cardTwentyFive}</p>
          <p>{this.state.cardTwentySix}</p>
          <p>{this.state.cardTwentySeven}</p>
          <p>{this.state.cardTwentyEight}</p>
          <p>{this.state.cardTwentyNine}</p>
          <p>{this.state.cardThirty}</p>
        </Container>
      </div>
    );
  }
}
