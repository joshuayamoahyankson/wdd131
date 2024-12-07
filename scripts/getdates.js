let currentYear = new Date().getFullYear();

let lastmodified = document.lastModified;
document.querySelector("#currentyear").textContent = `${currentYear}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastmodified}`;