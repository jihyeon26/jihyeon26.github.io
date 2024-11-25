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



  function openStandModal() {
    document.getElementById('stand-modal').style.display = 'flex';
  }

  function openCushionModal() {
    document.getElementById('cushion-modal').style.display = 'flex';
  }

  function closeStandModal() {
    document.getElementById('stand-modal').style.display = 'none';
  }

  function closeCushionModal() {
    document.getElementById('cushion-modal').style.display = 'none';
  }

  window.onclick = function(event) {
    const standModal = document.getElementById('stand-modal');
    const cushionModal = document.getElementById('cushion-modal');
    if (event.target === standModal) {
      standModal.style.display = 'none';
    }
    if (event.target === cushionModal) {
      cushionModal.style.display = 'none';
    }
  };

  //first modal
  const images = [
    "./assets/yeoun/yeoun_index.jpg",
    "./assets/yeoun/yeoun_index2.jpg",
    "./assets/yeoun/yeoun_index3.jpg",
    "./assets/yeoun/yeoun_index4.jpg"
  ];
  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    document.getElementById("modal1").style.display = "flex";
    document.getElementById("modal-image").src = images[currentIndex];
  }

  function closeModal() {
    document.getElementById("modal1").style.display = "none";
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("modal-image").src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("modal-image").src = images[currentIndex];
  }