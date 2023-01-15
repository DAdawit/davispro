import jokesData from "./joks/joksdata";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import Card from "./components/Card";
import CardAribnb from "./airbnb/Card";
import Nav from "./airbnb/Nav";
import Hero from "./airbnb/Hero";
import Jokes from "./joks/Joks";
import aribnbData from "./airbnb/data";
import Meme from "./memeGeneretor/Meme";

const root = ReactDOM.createRoot(document.getElementById("root"));
const airbnbElement = aribnbData.map((data) => {
  return (
    <div>
      <CardAribnb
        key={data.id}
        item={data}
        // {...data}
      />
    </div>
  );
});
root.render(
  <React.StrictMode>
    {/* <Nav /> */}
    {/* <Meme /> */}
    {/* {airbnbElement} */}
    {/* <Hero /> */}
    {/* <Header /> */}
    {/* <Card /> */}
    <Jokes Jokes={jokesData} />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
