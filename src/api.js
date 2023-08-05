// api.js
export function fetchAPI(date) {
  // Simulate API call and return mock data
  // Replace this with your actual API call logic in a real scenario
  const mockData = {
    "2023-08-23": ["17:00", "18:00", "19:00"],
    "2023-08-24": ["18:00", "19:00", "20:00"],
    "2023-08-25": ["19:00", "20:00", "21:00"],
  };

  return mockData[date] || [];
}

// Simulate the submitAPI function
export function submitAPI(formData) {
  // In a real scenario, you would make an actual API call here
  // For now, we will just return a resolved Promise to simulate a successful submission
  return new Promise((resolve, reject) => {
    // Simulate a successful submission after a short delay (1 second)
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}
