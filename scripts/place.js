let currentYear = new Date().getFullYear();

let lastmodified = document.lastModified;
document.querySelector("#currentyear").textContent = `${currentYear}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastmodified}`;

const temperature = 10;
const windSpeed = 5;


function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1); 
}

function displayWindChill(temp, speed) {
  let windChillValue;
  if (temp <= 10 && speed > 4.8) {
    windChillValue = calculateWindChill(temp, speed) + ' °C'; 
  } else {
    windChillValue = 'N/A';
  }

  document.getElementById('windChill').textContent = windChillValue;
}

displayWindChill(temperature, windSpeed);