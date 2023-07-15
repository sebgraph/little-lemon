import Logo from "../img/logo.png";
import "./NavbarStyles.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a href="index.html">
            <img src={Logo} alt="Little lemon logo"></img>
          </a>
          <ul>
            <li>
              <a className="link" href="#home">
                Home
              </a>
              <a className="link" href="#home">
                About
              </a>
              <a className="link" href="#home">
                Menu
              </a>
              <a className="link" href="#home">
                Reservations
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
