 // Created Sunday, March 23, 2025  by Turikumana Isaie
document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            document.body.removeChild(loader);
        });
    }

    // Burger Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }

    // Intersection Observer for Animations
    const cards = document.querySelectorAll('.feature-card');
    if (cards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        });
        cards.forEach(card => observer.observe(card));
    }

    // Snowfall Effect
    function createSnow() {
        const snowfall = document.getElementById('snowfall');
        if (!snowfall) return;
        
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
        if (Math.random() > 0.7) createSnow();
    }, 300);

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const body = document.body;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.setAttribute('data-theme', savedTheme);
            themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
        }
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="bx bx-sun"></i>' : '<i class="bx bx-moon"></i>';
            localStorage.setItem('theme', newTheme);
        });
    }

    // Image Hover Preview
    const images = document.querySelectorAll('.hover-preview');
    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.1)';
            });
            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });
    }

    // Changing Title Effect
    const titleElement = document.getElementById('changingTitle');
    if (titleElement) {
        const roles = [
           "Fouder Of ▱tieflab▰", "an Inventor", "Electronics Engineer", "Software Developer", 
           "Web Developer", "Copywriter", "Software Designer", "Digital Artist", "Graphics Designer",
           "Hardware Desinger", "Tech enthusiast", "3D Designer", "Programmer",  "Researcher", "Content Creator"
        ];
        let currentIndex = 0;
        function changeTitle() {
            titleElement.style.animation = 'none';
            void titleElement.offsetWidth;
            titleElement.style.animation = 'titleChange 12s infinite';
            currentIndex = (currentIndex + 1) % roles.length;
            titleElement.textContent = roles[currentIndex];
        }
        setInterval(changeTitle, 3000);
    }
});

   function isDesktop() {
            return window.innerWidth > 768; // Adjust breakpoint as needed
        }

        function generateQRCode() {
            let qrcodeContainer = document.getElementById("qrcode");
            qrcodeContainer.innerHTML = ""; 
            let qr = new QRCode(qrcodeContainer, {
                text: "https://turikumanaisaie.vercel.app/",
                width: 100,
                height: 100
            });
            setTimeout(() => {
                let img = document.createElement("img");
                img.src = "src/isaie.png";
                img.id = "overlay-img";
                qrcodeContainer.appendChild(img);
            }, 500);
        }

        if (isDesktop()) {
            setTimeout(() => {
                document.getElementById('qr-popup').style.display = 'block';
                generateQRCode();
            }, 80000); 
        }

        function closeQRPopup() {
            document.getElementById('qr-popup').style.display = 'none';
        }
