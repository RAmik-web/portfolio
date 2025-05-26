const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body; // Get the body element

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Toggle body scroll
        body.classList.toggle('no-scroll'); // Add this line

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// --- New/Modified JavaScript for Active Link Highlighting ---
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) { // Adjust offset as needed
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    })
});

// Smooth scrolling for navigation links (existing, just ensure it works with new classes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile nav after clicking a link
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        const body = document.body; // Get the body element

        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            body.classList.remove('no-scroll'); // Remove body scroll lock
            document.querySelectorAll('.nav-links li').forEach(link => {
                link.style.animation = ''; // Reset animation
            });
        }
    });
});