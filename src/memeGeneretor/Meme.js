import "../styles/meme.css";
import Header from "./Header";
import EventListener from "./EventListners";
export default function Meme() {
  return (
    <div>
      <Header />
      <EventListener />
      <main>
        <form className="form">
          <input type="text" className="form-input" placeholder=" top text" />
          <input type="text" className="form-input" placeholder="bottom text" />
          <button className="form-button">Get a new meme image </button>
        </form>
      </main>
    </div>
  );
}
