import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import "./reservations.css";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
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
      navigate("/booking-confirmed"); // Navigate to the booking confirmation page
    } else {
      // Handle unsuccessful booking (optional)
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Reservations</h1>
        <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
      </div>
    </section>
  );
};

export default Reservations;
