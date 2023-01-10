import logo from "../img/Vector.png";
import "../styles/airbnb.css";
export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="airbnb" className="nav-img" />
      </nav>
    </div>
  );
}
