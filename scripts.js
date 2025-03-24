 // Created Sunday, March 23, 2025  by Turikumana Isaie
window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});


// Animations
const cards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

cards.forEach(card => {
    observer.observe(card);
});

// Snowfall
function createSnow() {
    const snowfall = document.getElementById('snowfall');
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    
    const startLeft = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 3 + 5;
    
    snowflake.style.left = `${startLeft}px`;
    snowflake.style.animationDuration = `${animationDuration}s`;
    
    snowfall.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000);
}

setInterval(() => {
    if(Math.random() > 0.7) createSnow();
}, 300);

// Header Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const nav = document.querySelector('.nav');
    
    if (currentScroll <= 0) {
        nav.style.transform = 'none';
        return;
    }
    
    if (currentScroll > lastScroll) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'none';
    }
    lastScroll = currentScroll;
});


// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
} else {
    // Default to light theme
    body.setAttribute('data-theme', 'light');
    themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme and icon
    body.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
});









document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight');
    const imagePopup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');

    highlights.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            const imageUrl = e.target.getAttribute('data-image');
            popupImage.src = imageUrl;
            const rect = e.target.getBoundingClientRect();
            imagePopup.style.top = `${rect.bottom + window.scrollY + 10}px`;
            imagePopup.style.left = `${rect.left + window.scrollX}px`;
            imagePopup.style.display = 'block';
        });

        item.addEventListener('mouseleave', () => {
            imagePopup.style.display = 'none';
        });
    });
});


 document.addEventListener('DOMContentLoaded', () => {
            const highlights = document.querySelectorAll('.highlight');
            const imagePopup = document.getElementById('imagePopup');
            const popupImage = document.getElementById('popupImage');

            highlights.forEach(item => {
                item.addEventListener('mouseenter', (e) => {
                    const imageUrl = e.target.dataset.image;
                    if (!imageUrl) return;

                    // Preload image
                    const img = new Image();
                    img.src = imageUrl;
                    
                    img.onload = () => {
                        popupImage.src = imageUrl;
                        imagePopup.style.display = 'block';
                        
                        // Position popup
                        const rect = e.target.getBoundingClientRect();
                        imagePopup.style.left = `${e.clientX}px`;
                        imagePopup.style.top = `${e.clientY + 20}px`;
                    };

                    img.onerror = () => {
                        console.error('Failed to load image:', imageUrl);
                        imagePopup.style.display = 'none';
                    };
                });

                item.addEventListener('mousemove', (e) => {
                    imagePopup.style.left = `${e.clientX}px`;
                    imagePopup.style.top = `${e.clientY + 20}px`;
                });

                item.addEventListener('mouseleave', () => {
                    imagePopup.style.opacity = '0';
                    setTimeout(() => {
                        imagePopup.style.display = 'none';
                        imagePopup.style.opacity = '1';
                    }, 200);
                });
            });
        });




         const roles = [
            "Electronics Engineer",
            "Web Developer",
            "Copywriter",
            "Digital Artist",
            "Graphics Designer",
            "PCB Designer",
            "Content Creator",
            "Programmer"
        ];

        let currentIndex = 0;
        const titleElement = document.getElementById('changingTitle');

        function changeTitle() {
            titleElement.style.animation = 'none';
            void titleElement.offsetWidth; // Trigger reflow
            titleElement.style.animation = 'titleChange 12s infinite';
            
            currentIndex = (currentIndex + 1) % roles.length;
            titleElement.textContent = roles[currentIndex];
        }

        setInterval(changeTitle, 3000); // Change every 3 seconds