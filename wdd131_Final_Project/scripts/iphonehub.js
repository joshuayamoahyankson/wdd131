const showMoreButton = document.getElementById('show-more');
if (showMoreButton) {
    showMoreButton.addEventListener('click', function() {
        const info = document.getElementById('additional-info');
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = 'block';
            this.textContent = 'Show Less Details';
        } else {
            info.style.display = 'none';
            this.textContent = 'Show More Details';
        }
    });
}

const toggleSecurityButton = document.getElementById('toggle-security-info');
if (toggleSecurityButton) {
    toggleSecurityButton.addEventListener('click', function() {
        const info = document.getElementById('additional-security-info');
        console.log(info.style.display);
        if (info.style.display === 'none' || info.style.display === '') {
            info.style.display = 'block';
            this.textContent = 'Show Less Details';
        } else {
            info.style.display = 'none';
            this.textContent = 'Show More Details';
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const feedbackElement = document.getElementById("feedback");

    if (!form) {
        console.error("Form not found! Check your HTML structure.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Retrieve input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate inputs
        if (!name.match(/^[A-Za-z\s]+$/)) {
            feedbackElement.textContent = "Please enter a valid name (letters and spaces only).";
            feedbackElement.style.color = "red";
            return;
        }

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            feedbackElement.textContent = "Please enter a valid email address.";
            feedbackElement.style.color = "red";
            return;
        }

        if (message.length < 5) {
            feedbackElement.textContent = "Message should be at least 5 characters long.";
            feedbackElement.style.color = "red";
            return;
        }

        // Display a success message
        feedbackElement.textContent = `Thank you, ${name}, for your message! We will respond to ${email} soon.`;
        feedbackElement.style.color = "green";

        // Clear the form
        form.reset();
    });
});

