// Add event listener to menu items
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.dataset.target;
            const target = document.querySelector(`#${targetId}`);
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add event listener to learn more button
document.getElementById("learn-more").addEventListener("click", function(event) {
    event.preventDefault();
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

// Add event listener to contact form
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Send email using your preferred email service
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Send email to marketing@doubleg.tech using fetch API
    fetch("/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            message
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    // Reset form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});
