
// Add event listener to menu items
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            const target = document.querySelector(this.dataset.target);
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add event listener to learn more button
document.getElementById("learn-more").addEventListener("click", function() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

// Add event listener to contact form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using your preferred email service
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});
