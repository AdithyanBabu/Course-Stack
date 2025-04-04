// Course Data
const courses = [
    {
        name: "AWS",
        instructor: "Amal Joe",
        price: "$100",
        image: "/components/aws.png"
    },
    {
        name: "Data Analytics",
        instructor: "Salman Fariz",
        price: "$100",
        image: "/components/dA.webp"
    },
    {
        name: "Js",
        instructor: "Jithin V",
        price: "$150",
        image: "/components/Js.webp"
    },
    {
        name: "Python",
        instructor: "Andrews Jane",
        price: "$150",
        image: "/components/python.jpeg"
    },
    {
        name: "React.Js",
        instructor: "Suzan PV",
        price: "$129",
        image: "/components/react.webp"
    },
    {
        name: "Figma",
        instructor: "Navaneeth S",
        price: "$200",
        image: "/components/figma.png"
    }
];

const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const courseContainer = document.getElementById('course-container');
    const header = document.querySelector('header');

    // Handle Hamburger Menu
    hamburger.addEventListener('click', (e) => {
        navLinks.classList.toggle('active');
        e.stopPropagation(); // Prevent closing when clicking inside
    });

    document.body.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !e.target.classList.contains('hamburger')) {
            closeMenu();
        }
    });

    // Close Navbar on Scroll
    window.addEventListener('scroll', closeMenu);

    // Optimize Course Card Rendering
    let courseHTML = courses.map(course => `
        <div class="course-card">
            <img src="${course.image}" alt="${course.name}">
            <h3>${course.name}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p class="price">${course.price}</p>
        </div>
    `).join('');
    courseContainer.innerHTML = courseHTML;

    // Navbar Scroll Behavior (Efficient Handling)
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            let currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            if (currentScrollY > lastScrollY) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollY = currentScrollY;
        });
    });

    // Use IntersectionObserver for Fade-in Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.feature-card').forEach(card => observer.observe(card));
});

function closeMenu() {
    document.querySelector('.nav-links').classList.remove('active');
}


