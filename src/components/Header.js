import logo from "../logo.svg";
import "../App.css";
export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul className="nav-items">
          <li>pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
