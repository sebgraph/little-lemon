import "./BookingForm.css";
import React, { useEffect, useState } from "react";

const BookingForm = ({ availableTimes, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [birthday, setBirthday] = useState("");
  const [loading, setLoading] = useState(true);

  const getIsFormValid = () => {
    return date !== "" && time !== "" && guests !== "" && birthday !== "";
  };

  useEffect(() => {
    setLoading(true);
    // Fetch data when the component mounts or the date form field is changed
    updateTimes({ type: "UPDATE_TIMES", date: date }).then(() => {
      setLoading(false); // Set loading to false when the data is available
    });
  }, [date]);

  const clearForm = () => {
    setDate("");
    setTime("");
    setGuests("");
    setBirthday("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, birthday });
    clearForm();
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const updateTimes = async (action) => {
    // Simulate API call and return mock data
    // Replace this with your actual API call logic in a real scenario
    const mockData = {
      "2023-08-23": ["17:00", "18:00", "19:00"],
      "2023-08-24": ["18:00", "19:00", "20:00"],
      "2023-08-25": ["19:00", "20:00", "21:00"],
    };

    const times = mockData[action.date] || [];
    return times;
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
      {loading ? (
        <p>Loading available times...</p>
      ) : (
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="res-time"
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption}>{timeOption}</option>
          ))}
        </select>
      )}
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
