// Reservations.js
import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import "./reservations.css";
import "../styles/typography.css";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "../components/ConfirmedBooking";

const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false); // State to track booking confirmation
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    initializeTimes(); // Fetch available times for today's date when the component mounts
  }, []);

  const initializeTimes = async () => {
    const today = new Date(); // Get today's date
    const formattedDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;

    try {
      const times = await fetchAPI(formattedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  // Set up the function for submitting the form
  const submitForm = async (formData) => {
    const isBookingSuccessful = await submitAPI(formData);
    if (isBookingSuccessful) {
      setIsBookingConfirmed(true); // Set isBookingConfirmed to true when the form is successfully submitted
      navigate("/booking-confirmed"); // Navigate to the booking confirmation page
    } else {
      // Handle unsuccessful booking (optional)
    }
  };

  return (
    <section className="reservations-section">
      <div className="container">
        <div className="reservation-text">
          <h1 className="display">Book a Table</h1>
          <p className="body-medium reservation-body">
            Reserve your table now to enjoy an unforgettable culinary journey at
            our Mediterranean restaurant. Fill in the details and select your
            preferred date and time.
          </p>
        </div>
        {/* Conditionally render the BookingForm or ConfirmedBooking based on isBookingConfirmed */}
        <div className="reservation-form">
          {isBookingConfirmed ? (
            <ConfirmedBooking />
          ) : (
            <BookingForm
              availableTimes={availableTimes}
              submitForm={submitForm}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservations;
