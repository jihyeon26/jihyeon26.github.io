const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const artworks = document.querySelectorAll('.artwork');
const artworks_h = document.querySelectorAll('.artwork_h');
const closeModal = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Show modal with the selected image
artworks.forEach((artwork, index) => {
    artwork.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        caption.textContent = this.alt;
        currentIndex = index;
    });
});
artworks_h.forEach((artwork, index) => {
    artwork.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImg.src = this.src;
        caption.textContent = this.alt;
        currentIndex = index;
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal by clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Navigate to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + artworks.length) % artworks.length; // Loop to the last image
    updateModalImage();
});


// Navigate to the next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % artworks.length; // Loop to the first image
    updateModalImage();
});


// Update modal content
function updateModalImage() {
    modalImg.src = artworks[currentIndex].src;
    caption.textContent = artworks[currentIndex].alt;
}


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
