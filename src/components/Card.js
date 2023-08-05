import "./Card.css";
import "../styles/typography.css";
import { TruckIcon } from "@heroicons/react/24/outline";

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
          <p className="body-medium">{props.description}</p>
        </div>
        <div className="order-delivery">
          <p className="body-bold">Order delivery</p>
          <TruckIcon className="truck-icon" />
        </div>
      </div>
    </div>
  );
}
