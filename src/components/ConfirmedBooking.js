import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ConfirmedBooking = () => {
  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your reservation has been successfully confirmed.</p>
      <Link to="/reservations">
        <Button className="btn">Make another reservation</Button>
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
