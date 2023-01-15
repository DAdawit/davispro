import React from "react";
export default function Jokes(props) {
  const [isShown, setIshown] = React.useState(false);
  function showSetup() {
    setIshown((prevShown) => !prevShown);
  }
  const JokesElement = props.Jokes.map((jokes) => {
    return (
      <div>
        {jokes.setup && <h3>setup: {jokes.setup}</h3>}
        {isShown && <span>{jokes.punchline}</span>}
        <br></br>
        <button onClick={showSetup}>
          {isShown ? "hide " : "show "} punchline
        </button>
        <hr></hr>
      </div>
    );
  });
  return (
    <div>
      {JokesElement}
      {/* [props.setup && <h3>setup: {props.setup}</h3>]<p>punchline</p> :{" "}
      {props.punchline}
      <hr></hr> */}
    </div>
  );
}
