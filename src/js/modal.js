const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  openModalBtnFooter: document.querySelector('[data-modal-open-footer]'),
  form: document.querySelector('.contact-form'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.openModalBtnFooter.addEventListener('click', toggleModal);
refs.form.addEventListener('submit', onSubmitBtn);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function onSubmitBtn(e) {
  e.preventDefault();
  toggleModal();
  e.currentTarget.reset();
}
