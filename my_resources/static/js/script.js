// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Check system theme
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
body.setAttribute("data-theme", systemTheme);

// Toggle theme
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
});

// Update icon based on theme
if (systemTheme === "dark") {
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

// Update the current year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Handle the header behavior on scroll
document.addEventListener("DOMContentLoaded", function () {
  const headerUpper = document.querySelector(".header-upper");
  const stickyHeader = document.querySelector(".sticky-header");
  const headerLower = document.querySelector(".header-lower");

  window.addEventListener("scroll", function () {
    const headerUpperBottom = headerUpper.getBoundingClientRect().bottom;

    if (headerUpperBottom <= 0) {
      // When header-upper is out of view, show header-lower (fixed header)
      headerLower.classList.add("visible");
      stickyHeader.style.display = "none"; // Hide sticky-header
    } else {
      // When header-upper is in view, hide header-lower (fixed header)
      headerLower.classList.remove("visible");
      stickyHeader.style.display = "flex"; // Show sticky-header
    }
  });
});

// Handle the search box toggle
if ($(".search-toggle").length) {
  $(".search-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".search-box").toggleClass("now-visible");
  });
}

// Handle Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const mailToLink = `mailto:info@doubleg.tech?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.location.href = mailToLink;
});