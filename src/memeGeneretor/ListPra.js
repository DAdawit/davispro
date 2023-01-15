import React from "react";
import "../styles/meme.css";
export default function ListPra() {
  const [counter, setCounter] = React.useState(0);
  const [isGoingOut, setGoingOut] = React.useState(true);
  const [items, setItems] = React.useState(["item 1", "item 2"]);

  function subtract() {
    setCounter((prevCount) => prevCount - 1);
  }
  function add() {
    setCounter((prevCount) => prevCount + 1);
  }

  function changeGoingOut() {
    setGoingOut((prevState) => !prevState);
  }

  const itemsElemetn = items.map((item) => <p>{item}</p>);

  function addItem() {
    const newItem = `item ${items.length + 1}`;
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    console.log(items);
    // setItems
  }
  return (
    <div>
      {/* <div className="counter">
        <button className="counter-button" onClick={subtract}>
          -
        </button>{" "}
        <h1>{counter}</h1>
        <button className="counter-button" onClick={add}>
          +
        </button>
      </div> */}

      <button onClick={addItem}>add item</button>
      {itemsElemetn}

      <div className="ternery">
        <h1>Do i feel like going out</h1>

        <h2 onClick={changeGoingOut} className="is-going-out">
          {isGoingOut ? "Yes" : "No"}
        </h2>
      </div>
    </div>
  );
}
