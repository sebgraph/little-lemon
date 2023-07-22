import "./Card.css";
import "../styles/typography.css";

export function Card(props) {
  return (
    <div key={props.id} className="card">
      <div className="img-container">
        <img className="card-img" src={props.image} alt="product"></img>
      </div>
      <div className="content">
        <div className="text">
          <div className="head">
            <h3 className="headline2">{props.name}</h3>
            <p className="body-bold ">{props.price}</p>
          </div>
          <p className="body-regular">{props.description}</p>
        </div>
        <div className="order-delivery">
          <p>Order delivery</p>
        </div>
      </div>
    </div>
  );
}
