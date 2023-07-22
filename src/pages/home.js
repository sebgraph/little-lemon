import "./home.css";
import "../styles/typography.css";
import { Card } from "../components/Card";
import dishes from "../content";

const Home = () => {
  return (
    <main>
      <section className="hero-home">
        <div className="container">
          <div className="intro-text">
            <h1 className="display">Little Lemmon</h1>
            <span>
              <h3 className="headline1">Chicago</h3>
            </span>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
        </div>
      </section>

      <section className="specials-section">
        <div className="container">
          <div className="head">
            <h2 className="headline1">Specials</h2>
            <button>Online Menu</button>
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

      <section className=""></section>
    </main>
  );
};
export default Home;
