import React from "react";
import boxes from "./boxesData";
import NewBox from "./newBox";
export default function Box(props) {
  const [squares, setSquares] = React.useState(boxes);
  //   const colorMode = props.darkMode ? "black" : "white";
  const styles = {
    backgroundColor: props.darkMode ? "black" : "white",
  };
  function toggle(id) {
    // console.log(id);
    // setSquares((prevSquare) => {
    //   const newSquare = [];
    //   for (let i = 0; i < prevSquare.length; i++) {
    //     const currentSquare = prevSquare[i];
    //     if (currentSquare.id === id) {
    //       const updateSquare = {
    //         ...currentSquare,
    //         on: !currentSquare.on,
    //       };
    //       newSquare.push(updateSquare);
    //     } else {
    //       newSquare.push(currentSquare);
    //     }
    //   }
    //   return newSquare;
    // });
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const boxElement = squares.map((square) => (
    <NewBox
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
      style={styles}
    />
  ));
  return <div>{boxElement}</div>;
}
