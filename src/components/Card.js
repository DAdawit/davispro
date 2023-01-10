import profile from "../profile-800x800.png";
import "../App.css";
export default function Card() {
  return (
    <div>
      <h1>Digita Business card</h1>
      <div className="card">
        <img src={profile} alt="alt" />
        <h2>david carm</h2>
        <h4>designer</h4>
        <div className="buttons">
          <button className="likeButton">Like</button>
          <button className="shareButton">share</button>
        </div>
        <div className="about">
          <h3>About</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words
          </p>
        </div>
        <div className="interestes">
          <h3>Interestes</h3>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words
          </p>
        </div>
      </div>
    </div>
  );
}
