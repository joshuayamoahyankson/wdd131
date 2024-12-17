let currentYear = new Date().getFullYear();

let lastmodified = document.lastModified;
document.querySelector("#currentyear").textContent = `${currentYear}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastmodified}`;

const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1); // Round to 1 decimal place
}

// Check if conditions are met for wind chill calculation
function displayWindChill(temp, speed) {
  let windChillValue;
  if (temp <= 10 && speed > 4.8) {
    windChillValue = calculateWindChill(temp, speed) + ' °C'; // Calculate and format
  } else {
    windChillValue = 'N/A'; // Not applicable
  }

  // Insert the result into the weather section
  document.getElementById('windChill').textContent = windChillValue;
}

// Call the function on page load
displayWindChill(temperature, windSpeed);