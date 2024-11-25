let lastScrollY = window.scrollY;

function toggleNavOnScroll() {
    const topnav = document.querySelector('.topnav');

    if (window.scrollY > lastScrollY) {
        // Scrolling down
        topnav.classList.add('hidden');
    } else {
        // Scrolling up
        topnav.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
}

window.addEventListener('scroll', toggleNavOnScroll);
