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
      setColors("moreButton");
    }
  };

  return (
    <button
      className={`moreButton ${color}`}
      onClick={() => handleClickButton(props.stop)}
    >
      {props.stop}
    </button>
  );
};

const MoreStops = () => {
  const [moreStops, setMoreStops] = React.useState([
    "#1 Stop Any Lead Grapple",
    "#2 Stop Any Lead Submission",
    "#3 Stop Any Lead Strike",
    "#4 Stop Any Follow Up Grapple",
    "#5 Stop Any Follow Up Submission",
    "#6 Stop Any Follow Up Strike",
    "#13 Stop Any Grapple - Strike/Agility",
    "#14 Stop Any Submission - Power/Grapple",
    "#15 Stop Any Strike - Tech/Submission",
    "#19 See One, Stop One Grapple",
    "#20 See One, Stop One Submission",
    "#21 See One, Stop One Strike",
    "#25 Stop Any Grapple",
    "#26 Stop Any Submission",
    "#27 Stop Any Strike",
  ]);

  return (
    <div>
      <Container>
        {moreStops.map((stop) => (
          <Button key={stop} stop={stop} />
        ))}
      </Container>
    </div>
  );
};
export default MoreStops;
