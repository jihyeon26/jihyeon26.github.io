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



// 미디어 쿼리에 따라 스크롤 이벤트를 활성화 또는 비활성화
const mediaQuery = window.matchMedia('(max-width: 767px)'); // 작은 화면 조건
function handleMediaQueryChange(e) {
    const topnav = document.querySelector('.topnav');
    if (e.matches) {
        // 작은 화면에서는 스크롤 이벤트 제거하고 고정
        topnav.classList.remove('hidden');
        window.removeEventListener('scroll', toggleNavOnScroll);
    } else {
        // 큰 화면에서는 스크롤 이벤트 활성화
        window.addEventListener('scroll', toggleNavOnScroll);
    }
}



function toggleMenu() {
  const topnav = document.querySelector('.topnav');
  topnav.classList.toggle('show'); // 'show' 클래스 추가/제거
}

window.addEventListener('scroll', toggleNavOnScroll);
