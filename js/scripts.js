// scripts.js - JavaScript for Real Estate website

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality for properties page
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const propertyList = document.getElementById('propertyList');
    const propertyItems = document.querySelectorAll('.property-item');

    if (searchInput && filterSelect && propertyList) {
        function filterProperties() {
            const searchTerm = searchInput.value.toLowerCase();
            const filterValue = filterSelect.value.toLowerCase();

            propertyItems.forEach(item => {
                const title = item.querySelector('.card-title').textContent.toLowerCase();
                const description = item.querySelector('.card-text').textContent.toLowerCase();
                const type = item.dataset.type.toLowerCase();
                const location = item.dataset.location.toLowerCase();

                const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm) || location.includes(searchTerm);
                const matchesFilter = filterValue === '' || type === filterValue;

                if (matchesSearch && matchesFilter) {
                    item.style.display = 'block';
                    
                } else {
                    item.style.display = 'none';
                }
            });
        }

        searchInput.addEventListener('input', filterProperties);
        filterSelect.addEventListener('change', filterProperties);
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name.trim() && email.trim() && message.trim()) {
                // Send to MongoDB backend (relative URL)
                const timestamp = new Date().toISOString();
fetch('http://localhost:5000/submit-contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        phone: phone,
                        message: message,
                        timestamp: timestamp
                    })
                })
                .then(async response => {
                    const data = await response.json();
                    if (response.ok && data.message) {
                        alert('Thank you, ' + name + '! Saved to MongoDB.');
                        contactForm.reset();
                    } else {
                        throw new Error(data.error || 'Server error');
                    }
                })
                .catch(error => {
                    console.error('MongoDB submit error:', error);
                    if (error.message.includes('fetch') || error.message.includes('Failed')) {
                        alert('Backend not running? Start: python app.py (port 5000) + mongod');
                    } else {
                        alert('Error: ' + error.message);
                    }
                });
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Dark mode toggle
    const darkToggle = document.getElementById('darkModeToggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    // Stats counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stats-counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + counter.getAttribute('data-suffix');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + counter.getAttribute('data-suffix');
                }
            }, 20);
        });
    }

    // Initialize when stats section visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    });
    const statsSection = document.querySelector('.stats');
    if (statsSection) statsObserver.observe(statsSection);

   HELLO
     // Property modals
    const detailButtons = document.querySelectorAll('.btn-detail');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('propertyModal'));
            modal.show();
        });
    });

    // Testimonial carousel auto init (Bootstrap handles)
    const testimonialCarousel = document.querySelector('#testimonialCarousel');
    if (testimonialCarousel) {
        new bootstrap.Carousel(testimonialCarousel, {
            interval: 5000,
            wrap: true
        });
    }

    // AOS-like animations (extend observer)
    AOS.init({
        duration: 999,
        once: true
    });
});
