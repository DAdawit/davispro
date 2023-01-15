import React from "react";
import "../styles/meme.css";
import Header from "./Header";
import EventListener from "./EventListners";
import memesData from "./memesData";
import ListPra from "./ListPra";
import UpdatingObjects from "./updatingObjects";
import Count from "./Count";
import Box from "./box";
// ;
export default function Meme() {
  const [count, setCount] = React.useState(0);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/16iyn1.jpg",
  });
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomMeme].url;
    // console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function add() {
    setCount((prevcount) => prevcount + 1);
  }

  function subtract() {
    setCount((prevcount) => prevcount - 1);
  }
  return (
    <div>
      <Header />
      <Box darkMode={true} />
      {/* <section className="counter">
        <button className="counter-buttons" onClick={subtract}>
          -
        </button>
        <Count count={count} />
        <button className="counter-buttons" onClick={add}>
          +
        </button>
      </section> */}
      {/* <UpdatingObjects /> */}
      {/* <EventListener /> */}
      {/* <ListPra /> */}
      <main>
        <div className="form">
          <input type="text" className="form-input" placeholder=" top text" />
          <input type="text" className="form-input" placeholder="bottom text" />
          <button className="form-button" onClick={getMemeImage}>
            Get a new meme image{" "}
          </button>
        </div>
        <div className="img-container">
          <img src={meme.randomImage} alt="meme image" className="meme-image" />
        </div>
      </main>
    </div>
  );
}
