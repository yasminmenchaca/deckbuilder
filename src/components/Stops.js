import React from "react";
import { Container } from "react-bootstrap";

const Button = (props) => {
  const [color, setColors] = React.useState("");
  const [active, setActive] = React.useState(false);
  const handleClickButton = (stop) => {
    setActive(true);
    setColors(stop);
    if (active === true) {
      setActive(false);
      setColors("button");
    }
  };

  return (
    <button
      className={`button ${color}`}
      onClick={() => handleClickButton(props.stop)}
    >
      {props.stop}
    </button>
  );
};

const Stops = () => {
  const [stops, setStops] = React.useState([
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
        {stops.map((stop) => (
          <Button key={stop} stop={stop} />
        ))}
      </Container>
    </div>
  );
};
export default Stops;
