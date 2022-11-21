const refs = {
  openBtn: document.querySelector('[data-menu-openf]'),
  madalMenu: document.querySelector('[data-menuf]'),
  closeBtn: document.querySelector('[data-menu-closef]'),
  backdropRef: document.querySelector('.backdrop__formular'),
};

refs.openBtn.addEventListener('click', onOpenBtnClick);

function onOpenBtnClick(e) {
  e.preventDefault();
  document.addEventListener('keydown', onEscTap);
  refs.backdropRef.addEventListener('click', onClickOutside);
  refs.closeBtn.addEventListener('click', onBtnClose);

  refs.backdropRef.classList.remove('is-hidden');
}

function onEscTap(e) {
  if (e.key === 'Escape') {
    refs.backdropRef.classList.add('is-hidden');
  }
  document.removeEventListener('keydown', onEscTap);
}

function onClickOutside(e) {
  if (e.target.classList.value === 'backdrop__formular') {
    refs.backdropRef.classList.add('is-hidden');
    refs.backdropRef.removeEventListener('click', onClickOutside);
  }
}

function onBtnClose(e) {
  refs.backdropRef.classList.add('is-hidden');
  refs.closeBtn.removeEventListener('click', onBtnClose);
}
