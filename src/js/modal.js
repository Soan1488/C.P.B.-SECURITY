const refs = {
  openBtn: document.querySelector('[data-modal-open]'),
  modalMenu: document.querySelector('[data-modal]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  backdropRef: document.querySelector('.backdrop'),
  form: document.querySelector('#modal-form'),
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
  if (e.target.classList.value === 'backdrop') {
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
