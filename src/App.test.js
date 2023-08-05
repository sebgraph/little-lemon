import { initializeTimes, timesReducer } from "./pages/reservations";

test("initializeTimes function should return an array of available times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test("updateTimes function should return the same state value provided", () => {
  // Arrange: Define the initial state
  const initialState = ["12:00", "13:00", "14:00"];

  // Arrange: Define an action (doesn't matter for this specific test)
  const action = {
    type: "SOME_ACTION",
    data: "some data",
  };

  // Act: Call the timesReducer with the initial state and action
  const result = timesReducer(initialState, action);

  // Assert: Check if the result is equal to the initial state
  expect(result).toEqual(initialState);
});
