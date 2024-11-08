const axios = require('axios');

test('GET request returns status code 200', async () => {
  const url = "https://reqres.in/api/users?page=2";
  
  // Make the GET request
  const response = await axios.get(url);
  
  // Custom log for debugging
  if (response.status === 200) {
    console.log("Test Passed: Status code is 200.");
  } else {
    console.log(`Test Failed: Status code is ${response.status}.`);
  }

  // Assertion to automatically pass/fail the test
  expect(response.status).toBe(200);
});
