const refs = {
  openBtn: document.querySelector('[data-modal-open]'),
  openBtnFooter: document.querySelector('[data-modal-open-footer]'),
  modalMenu: document.querySelector('[data-modal]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  backdropRef: document.querySelector('.backdrop'),
  form: document.querySelector('#modal-form'),
};

refs.openBtn.addEventListener('click', onOpenBtnClick);
refs.openBtnFooter.addEventListener('click', onOpenBtnClick);

function onOpenBtnClick(e) {
  e.preventDefault();

  refs.backdropRef.classList.remove('is-hidden');

  document.addEventListener('keydown', onEscTap);
  refs.backdropRef.addEventListener('click', onClickOutside);
  refs.closeBtn.addEventListener('click', onBtnClose);
  refs.form.addEventListener('submit', onSubmitBtnClick);

  document.body.style.overflow = 'hidden';
}

function onEscTap(e) {
  if (e.key === 'Escape') {
    refs.backdropRef.classList.add('is-hidden');
    document.body.style.overflow = '';
    removeListeners();
  }
}

function onClickOutside(e) {
  if (e.target.classList.value === 'backdrop') {
    refs.backdropRef.classList.add('is-hidden');
    document.body.style.overflow = '';
    removeListeners();
  }
}

function onBtnClose(e) {
  refs.backdropRef.classList.add('is-hidden');
  document.body.style.overflow = '';
  removeListeners();
}

function onSubmitBtnClick(e) {
  e.preventDefault();
  refs.form.reset();
  onBtnClose();
  removeListeners();
}

function removeListeners() {
  refs.form.removeEventListener('submit', onSubmitBtnClick);
  document.removeEventListener('keydown', onEscTap);
  refs.closeBtn.removeEventListener('click', onBtnClose);
  refs.backdropRef.removeEventListener('click', onClickOutside);
}
