import "./home.css";
import "../styles/typography.css";
import { Card } from "../components/Card";
import dishes from "../content";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="hero-home">
        <div className="container">
          <div className="intro-text">
            <h1 className="display">Little Lemmon</h1>
            <span className="chicago-container">
              <img
                className="lemmon-icon"
                src="http://drive.google.com/uc?export=view&id=1mM_X3tJfEKIwT0_qWJqVVvBd_jfLDc9G"
                alt="lemmon-icon"
              ></img>
              <h3 className="headline1 chicago-text">Chicago</h3>
              <img
                className="lemmon-icon"
                src="http://drive.google.com/uc?export=view&id=1mM_X3tJfEKIwT0_qWJqVVvBd_jfLDc9G"
                alt="lemmon-icon"
              ></img>
            </span>
            <p className="body-medium text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations">
              <Button className="btn">Reserve a table</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="specials-section">
        <div className="container">
          <div className="head">
            <h2 className="headline1">Specials</h2>
            <Button>Online Menu</Button>
          </div>

          <div className="cards-container">
            {dishes.map((dish) => (
              <Card
                key={dish.id}
                image={dish.image}
                name={dish.name}
                price={dish.price}
                description={dish.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="headline1">Testimonials</h2>
          <div className="testimonials-group">
            <div className="testimonials-card">
              <span>“</span>
              <p className="body-bold">Testimony</p>
              <div className="user-info">
                <div className="avatar"></div>
                <div className="info">
                  <p className="body-bold username">username</p>
                  <p className="body-regular profession">Profession</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=""></section>
    </main>
  );
};
export default Home;
