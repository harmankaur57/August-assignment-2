/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Change menu icon
    if (navLinks.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
========================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";

    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .achievement-card, .timeline-item, .about-content, .about-image, .contact-info, .contact-form"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {

            element.classList.add("reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
