export default function EventListener() {
  function handleClick() {
    console.log(" i was clicked");
  }
  return (
    <div>
      <h1>event listners</h1>
      <div className="container">
        <img src="https://picsum.photos/640/360" />
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
  );
}
