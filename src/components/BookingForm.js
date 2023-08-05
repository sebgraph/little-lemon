import "./BookingForm.css";
import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [birthday, setBirthday] = useState("");
  /*   const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]); */

  const getIsFormValid = () => {
    return date !== "" && time !== "" && guests !== "" && birthday !== "";
  };

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("");
    setBirthday("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation created!");
    clearForm();
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    // Dispatch state change when date form field is changed
    updateTimes({ type: "UPDATE_TIMES", date: e.target.value });
  };

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        value={date}
        onChange={handleDateChange}
        type="date"
        id="res-date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        id="res-time"
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        id="occasion"
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        disabled={!getIsFormValid()}
      />
    </form>
  );
};

export default BookingForm;
