document.addEventListener("DOMContentLoaded", function () {
    const selectElement = document.getElementById("product-name");
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" }
    ];
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });

    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', '0');
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        let reviewCount = parseInt(localStorage.getItem('reviewCount'));
        reviewCount += 1;
        localStorage.setItem('reviewCount', reviewCount);
        alert(`Thank you! This is review #${reviewCount}.`);
    });

    const currentYear = new Date().getFullYear();
    document.querySelector("#currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${lastModified}`;
});
