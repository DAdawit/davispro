export default function Jokes(props) {
  // console.log(props.Jokes);
  const JokesElement = props.Jokes.map((jokes) => {
    return (
      <div>
        {jokes.setup && <h3>setup: {jokes.setup}</h3>}
        punchline : <p>{jokes.punchline}</p>
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
