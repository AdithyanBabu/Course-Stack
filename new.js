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

document.addEventListener('DOMContentLoaded', function() {



    
    hamburger.addEventListener('click', (e) => {
        navLinks.classList.toggle('active');
        e.stopPropagation(); // Prevent triggering outside click
    });

    //close navbar on outside click
    document.body.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !e.target.classList.contains('hamburger')) {
            closeMenu();
        }
    });

    // Close Navbar on Scroll
    window.addEventListener('scroll', () => {
        closeMenu();
    });

    
    // Container for the course cards
    const courseContainer = document.getElementById('course-container');

    // Generate the course cards dynamically
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        
        card.innerHTML = `
            <img src="${course.image}" alt="${course.name}">
            <h3>${course.name}</h3>
            <p>Instructor: ${course.instructor}</p>
            <p class="price">${course.price}</p>
        `;
        
        courseContainer.appendChild(card);
    });

    

    // Scroll Event for Navbar Behavior
    let lastScrollY = 0;
    const header = document.querySelector('header');
    const hoverArea = document.createElement('div');
    hoverArea.className = 'hover-area';
    document.body.appendChild(hoverArea);

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

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

    // Hover Area for Navbar Visibility
    hoverArea.addEventListener('mouseenter', () => {
        header.classList.remove('hidden');
    });

    // Viewport Checking Function
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fade-in Animation for Feature Cards
    function checkFadeIn() {
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            if (isInViewport(card)) {
                card.classList.add('fade-in');
            }
        });
    }

    

    window.addEventListener('scroll', checkFadeIn);
    document.addEventListener('DOMContentLoaded', checkFadeIn);
    // Close the menu if you click outside
    
});



function closeMenu() {
    navLinks.classList.remove('active');
}

