let currentYear = new Date().getFullYear();

let lastmodified = document.lastModified;
document.querySelector("#currentyear").textContent = `${currentYear}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastmodified}`;

// Select the hamburger button and nav menu
const hamburgerButton = document.getElementById("hamburger-button");
const navMenu = document.getElementById("nav-menu");

// Toggle the 'show' class on nav menu when button is clicked
hamburgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    navMenu.classList.toggle("show");

    // Toggle button symbol between hamburger and 'X'
    if (navMenu.classList.contains("show")) {
        hamburgerButton.innerHTML = "&times;"; // 'X' symbol
    } else {
        hamburgerButton.innerHTML = "&#9776;"; // Hamburger symbol
    }
});
