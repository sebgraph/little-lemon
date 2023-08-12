import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./ConfirmedBooking.css";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const ConfirmedBooking = () => {
  return (
    <section className="confirmed-section">
      <div className="confirmed-container ">
        <div className="message-container">
          <CheckCircleIcon className="check-icon" />
          <h2>Booking Confirmed!</h2>
          <p>Your reservation has been successfully confirmed.</p>
          <Link to="/reservations">
            <Button aria-label="Make another reservation" className="btn">
              Make another reservation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
