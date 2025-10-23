function openModal(){
  document.querySelector('.quiz-modal').classList.add('active')
  document.body.classList.add('no-scroll')
}

function closeModal() {
	document.querySelector('.quiz-modal').classList.remove('active')
	document.body.classList.remove('no-scroll')
}


// Бургер-меню
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const menuLinks = document.querySelectorAll('.menu-link');

// Функция открытия/закрытия меню
function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Закрытие меню
function closeMenu() {
    burgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// События
burgerMenu.addEventListener('click', toggleMenu);
mobileMenuOverlay.addEventListener('click', closeMenu);

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Закрытие меню при нажатии Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// Закрытие меню при ресайзе окна (если перешли с мобильного на десктоп)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

