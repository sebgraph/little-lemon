import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import "./reservations.css";

const Reservations = () => {
  const timesReducer = (state, action) => {
    return initializeTimes();
  };
  const [availableTimes, updateTimes] = useReducer(
    timesReducer,
    initializeTimes()
  );
  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  return (
    <section className="hero">
      <div className="container">
        <h1>Reservations</h1>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />
      </div>
    </section>
  );
};
export default Reservations;
