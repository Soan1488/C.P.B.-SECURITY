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
    removeListeners();
  }
}

function onClickOutside(e) {
  if (e.target.classList.value === 'backdrop__formular') {
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
  const name = e.currentTarget.elements.name.value;
  const tel = e.currentTarget.elements.tel.value;
  const email = e.currentTarget.elements.email.value;
  const profession = e.currentTarget.elements.profession.value;
  const location = e.currentTarget.elements.location.value;
  const message = e.currentTarget.elements.message.value;
  if (name.trim(' ') === '' || tel.trim(' ') === '') {
    return alert("Field name or phone can't be empty ");
  }

  Email.send({
    SecureToken: '24438714-087a-4e7c-ab75-9e631196de15',
    To: 'cpbsecurity@email.cz',
    From: 'cpb@europe.com',
    Subject: 'This is email from your website',
    Body: `I want work for you. Please call me back. My name: ${name}, phone: ${tel}, email: ${email}, 
    will work on position: ${profession}, location: ${location}, message: ${message}.`,
  }).then(message => alert(message));
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
