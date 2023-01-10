import hero from "../img/Group77.png";
import "../styles/airbnb.css";
export default function Hero() {
  return (
    <div>
      <section className="hero">
        <img src={hero} alt="hero img" className="hero-img" />
        <h1 className="hero-header">online Experiences</h1>
        <p className="hero-text">
          join unique interactive activities led by one of a kind hosts all
          without leaving home
        </p>
      </section>
    </div>
  );
}
