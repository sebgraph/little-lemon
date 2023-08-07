import "./BookingForm.css";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { validateEmail } from "../ValidateEmail";

const BookingForm = ({ submitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [birthday, setBirthday] = useState("");
  const [loading, setLoading] = useState(true);
  const [timesOptions, setTimesOptions] = useState([]); // State to store the available time options

  const getIsFormValid = () => {
    return (
      name &&
      validateEmail(email) &&
      date !== "" &&
      time !== "" &&
      guests !== "" &&
      birthday !== ""
    );
  };

  useEffect(() => {
    const formattedDate = date.toISOString().split("T")[0];
    updateTimes(formattedDate);
  }, [date]);

  const clearForm = () => {
    setName("");
    setEmail("");
    setDate(new Date());
    setTime("");
    setGuests("");
    setBirthday("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date: date.toISOString(), time, guests, birthday });
    clearForm();
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const updateTimes = async (formattedDate) => {
    // Simulate API call and return mock data
    // Replace this with your actual API call logic in a real scenario
    const mockData = {
      "2023-08-23": ["Select an option", "17:00", "18:00", "19:00"],
      "2023-08-24": ["Select an option", "18:00", "19:00", "20:00"],
      "2023-08-25": ["Select an option", "19:00", "20:00", "21:00"],
    };

    const times = mockData[formattedDate] || [];
    setTimesOptions(times); // Set the available time options in the state
    setLoading(false); // Update loading state to false after fetching data
  };

  return (
    <form className="reserve-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Complete name</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyUp={(e) => {
          const disallowedKeys = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
          ];
          if (disallowedKeys.includes(e.key)) {
            setName(name.replace(/[0-9]/g, ""));
          }
        }}
        placeholder="Name"
        id="name"
      />

      <label htmlFor="email">Email address</label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(
            validateEmail(e.target.value) ? "" : "Invalid email address"
          );
        }}
        placeholder="Email address"
        id="email"
      />
      {emailError && <p className="error-message">{emailError}</p>}

      <label htmlFor="res-date">Choose date</label>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        id="res-date"
        minDate={new Date()}
      />
      <label htmlFor="res-time">Choose time</label>
      {loading ? (
        <p>Loading available times...</p>
      ) : timesOptions.length === 0 ? (
        <p>No available times for selected date</p>
      ) : (
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="res-time"
        >
          {timesOptions.map((timeOption) => (
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
        disabled={!getIsFormValid() || !!emailError}
      />
    </form>
  );
};

export default BookingForm;
