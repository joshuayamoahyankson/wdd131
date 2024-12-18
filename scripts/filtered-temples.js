const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
      },
      {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8-14",
        area: 104000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
      },
      {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
      },
  ];

// Select the container where the temple cards will be added
let container = document.getElementById('temple-container');

// Loop through the temples array
for (let i = 0; i < temples.length; i++) {
    // Get the current temple
    let temple = temples[i];

    // Create a div element for the temple card
    let templeCard = document.createElement('div');
    templeCard.classList.add('temple-card'); // You can add styles to this class

    // Create an h2 for the temple name
    let templeName = document.createElement('h2');
    templeName.textContent = temple.templeName; // Set the text content of the h2
    templeCard.appendChild(templeName); // Append the h2 to the temple card

    // Create a p for the location
    let location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`; // Set the location text
    templeCard.appendChild(location); // Append the location to the temple card

    // Create a p for the dedication date
    let dedicationDate = document.createElement('p');
    dedicationDate.textContent = `Dedication Date: ${temple.dedicationDate}`; // Set the dedication date text
    templeCard.appendChild(dedicationDate); // Append the dedication date to the temple card

    // Create a p for the area
    let area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`; // Set the area text
    templeCard.appendChild(area); // Append the area to the temple card

    // Create an img tag for the temple image
    let templeImage = document.createElement('img');
    templeImage.src = temple.imageUrl; // Set the image source
    templeImage.alt = temple.name; // Set the alt text (for accessibility)
    templeImage.loading = 'lazy'; // Enable lazy loading for the image

    if (temple.templeName === "Accra Ghana") {
        templeImage.style.width = "400px"; // Resize the Accra image
        templeImage.style.height = "250px"; // Resize the Accra image
    } else if (temple.templeName === "Bountiful Utah Temple") {
        templeImage.style.width = "400px"; // Resize the Bountiful image
        templeImage.style.height = "250px"; // Resize the Bountiful image
    } else if (temple.templeName === "Salt Lake Temple") {
        templeImage.style.width = "400px"; // Resize the Salt Lake image
        templeImage.style.height = "250px"; // Resize the Salt Lake image
    }
    templeCard.appendChild(templeImage); // Append the image to the temple card

    // Append the temple card to the container
    container.appendChild(templeCard);
}
let currentYear = new Date().getFullYear();

let lastmodified = document.lastModified;
document.querySelector("#currentyear").textContent = `${currentYear}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${lastmodified}`;