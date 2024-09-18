import logo from "../images/brand_logo.svg";
import "../src/App.css";

export default function Navbar() {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <div>
          <ul className="menu">
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="btn">Login</button>
      </div>
    </>
  );
}
