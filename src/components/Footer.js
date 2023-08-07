import { Link } from "react-router-dom";
import "./Footer.css";
import "../styles/typography.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <img
          className="logo-footer"
          src="http://drive.google.com/uc?export=view&id=1CBhBkDW_oz4c4P8IYLCo_ZJaHcL0EKgW"
          alt="logo"
        ></img>
        <div className="container-footer-links">
          <div className="links-footer-group">
            <h3>Doormat Navigation</h3>
            <ul className="footer-links">
              <Link className="footer-link body-medium">Home</Link>
              <Link className="footer-link body-medium">About</Link>
              <Link className="footer-link body-medium">Menu</Link>
              <Link className="footer-link body-medium">Reservation</Link>
              <Link className="footer-link body-medium">Order</Link>
              <Link className="footer-link body-medium">Login</Link>
            </ul>
          </div>

          <div className="links-footer-group">
            <h3>Contact</h3>
            <ul className="footer-links">
              <Link className="footer-link body-medium">Address</Link>
              <Link className="footer-link body-medium">Phone number</Link>
              <Link className="footer-link body-medium">Email</Link>
            </ul>
          </div>

          <div className="links-footer-group">
            <h3>Social media links</h3>
            <ul className="footer-links">
              <Link className="footer-link body-medium">Facebook</Link>
              <Link className="footer-link body-medium">Instagram</Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
