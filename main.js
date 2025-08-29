// Mobile menu functionality (ensure this is also within DOMContentLoaded if it's not already)
// (Your existing mobile menu code would go here, if not already within a DOMContentLoaded)
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');

if (mobileMenuBtn) { // Add a check to ensure the element exists before attaching listener
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('translate-x-full');
        }, 10);
    });
}

if (mobileMenuClose) { // Add a check
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    });
}

if (mobileMenuOverlay) { // Add a check
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenu.classList.add('translate-x-full');
            setTimeout(() => {
                mobileMenuOverlay.classList.add('hidden');
            }, 300);
        }
    });
}


// Navbar scroll effect
const headerContainer = document.getElementById('header-container');
const navbar = document.getElementById('navbar');
const topBar = document.querySelector('.bg-gradient-to-r.from-topbar-bg-dark');

// Add checks before accessing offsetHeight
let initialHeaderHeight = 0;
if (window.innerWidth >= 1024 && topBar && navbar) {
    initialHeaderHeight = topBar.offsetHeight + navbar.offsetHeight;
    if (headerContainer) { // Add a check
        headerContainer.style.height = `${initialHeaderHeight}px`;
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && topBar && navbar) {
        initialHeaderHeight = topBar.offsetHeight + navbar.offsetHeight;
        if (headerContainer) { // Add a check
            headerContainer.style.height = `${initialHeaderHeight}px`;
        }
    } else {
        if (headerContainer) { // Add a check
            headerContainer.style.height = 'auto';
        }
    }
});

window.addEventListener('scroll', () => {
    if (headerContainer) { // Add a check
        if (window.scrollY > 50) {
            headerContainer.classList.add('header-scrolled');
        } else {
            headerContainer.classList.remove('header-scrolled');
        }
    }
});

// Form submission
const quoteForm = document.getElementById('quote-form');
if (quoteForm) { // Add a check
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your interest! We will contact you soon with your personalized quote.');
    });
}


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Team Slider Functionality


// Accordion functionality for "Why Choose Us" section
// Ensure this code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            const icon = button.querySelector('.fa-chevron-down');

            // Close all other open accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== button.closest('.accordion-item')) {
                    const otherContent = item.querySelector('.accordion-content');
                    const otherIcon = item.querySelector('.accordion-header .fa-chevron-down');

                    if (otherContent && otherContent.classList.contains('active')) { // Add null check for otherContent
                        otherContent.classList.remove('active');
                        otherContent.style.maxHeight = '0';
                        if (otherIcon) { // Add null check for otherIcon
                            otherIcon.classList.remove('rotate-180');
                        }
                    }
                }
            });

            // Toggle current accordion
            accordionContent.classList.toggle('active');
            icon.classList.toggle('rotate-180');

            if (accordionContent.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = '0';
            }
        });
    });
});