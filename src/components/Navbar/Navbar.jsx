import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">Bhumika Gupta</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">My Projects</a>
        </li>

        <li>
          <a href="#experience">My Experiences</a>
        </li>
      </ul>


      <a href="#contact">
        <button className="connect-btn">Let's Connect</button>
      </a>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
