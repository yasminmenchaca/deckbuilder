import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

const Button = (props) => {
  const [color, setColors] = React.useState("");
  const [active, setActive] = React.useState(false);
  const handleClickButton = (name) => {
    setActive(true);
    setColors(name);
    if (active === true) {
      setActive(false);
      setColors("button");
    }
  };

  console.log(active);
  return (
    <button
      className={`button ${color}`}
      onClick={() => handleClickButton(props.name)}
    >
      {props.name}
    </button>
  );
};

const Stops = () => {
  const [names, setNames] = React.useState([
    "Power",
    "Technique",
    "Agility",
    "Strike",
    "Submission",
    "Grapple",
  ]);

  return (
    <div>
      <Container>
        {names.map((name) => (
          <Button key={name} name={name} />
        ))}
      </Container>
    </div>
  );
};
export default Stops;
