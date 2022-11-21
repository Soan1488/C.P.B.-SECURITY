const refs = {
  openBtn: document.querySelector('[data-menu-openf]'),
  modalMenu: document.querySelector('[data-menuf]'),
  closeBtn: document.querySelector('[data-menu-closef]'),
  backdropRef: document.querySelector('.backdrop__formular'),
  form: document.querySelector('#formular-form'),
};

refs.openBtn.addEventListener('click', onOpenBtnClick);

function onOpenBtnClick(e) {
  e.preventDefault();
  document.addEventListener('keydown', onEscTap);
  refs.backdropRef.addEventListener('click', onClickOutside);
  refs.closeBtn.addEventListener('click', onBtnClose);

  refs.backdropRef.classList.remove('is-hidden');
  refs.form.addEventListener('submit', onSubmitBtnClick);

  document.body.style.overflow = 'hidden';
}

function onEscTap(e) {
  if (e.key === 'Escape') {
    refs.backdropRef.classList.add('is-hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onEscTap);
  }
}

function onClickOutside(e) {
  if (e.target.classList.value === 'backdrop__formular') {
    refs.backdropRef.classList.add('is-hidden');
    document.body.style.overflow = '';
    refs.backdropRef.removeEventListener('click', onClickOutside);
  }
}

function onBtnClose(e) {
  refs.backdropRef.classList.add('is-hidden');
  document.body.style.overflow = '';
  refs.closeBtn.removeEventListener('click', onBtnClose);
}

function onSubmitBtnClick(e) {
  e.preventDefault();
  refs.form.reset();
  onBtnClose();
  refs.form.removeEventListener('submit', onSubmitBtnClick);
}
