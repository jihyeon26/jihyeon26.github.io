const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const artworks = document.querySelectorAll('.artwork');
const closeModal = document.querySelector('.close');

// Add click event to each image
artworks.forEach((artwork) => {
    artwork.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        caption.textContent = this.alt;
    });
});

// Close modal when "X" is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


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
