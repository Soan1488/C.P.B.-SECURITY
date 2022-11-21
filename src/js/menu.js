const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  navList: document.querySelector('.mobile-nav__list'),
};
refs.openMenuBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.menu.classList.toggle('is-open');
  if (refs.menu.classList.contains('is-open')) {
    refs.navList.addEventListener('click', onNavListClick);
  }
}

function onNavListClick(e) {
  if (e.target.classList.contains('mobile-nav__link')) {
    closeMenu();
  }
}

function closeMenu() {
  refs.menu.classList.toggle('is-open');
  refs.navList.removeEventListener('click', onNavListClick);
}
