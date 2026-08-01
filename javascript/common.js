(() => {
  const nav = document.querySelector('.topnav');
  const menuButton = document.querySelector('.hamburger');

  if (!nav || !menuButton) {
    return;
  }

  const mobileQuery = window.matchMedia('(max-width: 767px)');
  let lastScrollY = window.scrollY;

  const closeMenu = () => {
    nav.classList.remove('show');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  };

  const handleScroll = () => {
    if (mobileQuery.matches || document.body.classList.contains('home-page')) {
      nav.classList.remove('hidden');
      lastScrollY = window.scrollY;
      return;
    }

    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
  };

  menuButton.addEventListener('click', toggleMenu);
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', handleScroll, { passive: true });
  mobileQuery.addEventListener('change', () => {
    nav.classList.remove('hidden');
    closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
})();
