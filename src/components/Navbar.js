import { useState } from "react";
import Logo from "../img/logo.png";
import "./NavbarStyles.css";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={Logo} alt="Little lemon logo"></img>
          </Link>
          <ul
            className={Mobile ? "links-mobile" : "links"}
            onClick={() => setMobile(false)}
          >
            <Link className="link link-mobile" to="/">
              <li>Home</li>
            </Link>
            <Link className="link link-mobile" to="/about">
              <li>About</li>
            </Link>
            <Link className="link link-mobile" to="/menu">
              <li>Menu</li>
            </Link>
            <Link className="link-reservations link-mobile" to="/reservations">
              <li>Reservations</li>
            </Link>
          </ul>
        </nav>
        <Button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? (
            <XMarkIcon className="icon" />
          ) : (
            <Bars3BottomLeftIcon className="icon" />
          )}
        </Button>
      </header>
    </>
  );
}

export default Navbar;
