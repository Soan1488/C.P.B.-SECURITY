const refs = {
  list: document.querySelector('.cards-list'),
  backdrop: '',
  closeBtn: '',
};

refs.list.addEventListener('click', onListClick);

function onListClick(e) {
  if (e.target.classList.contains('guard')) {
    refs.backdrop = document.querySelector('.guard__backdrop');
    refs.closeBtn = document.querySelector('.guard__details');
  } else if (e.target.classList.contains('camera')) {
    refs.backdrop = document.querySelector('.camera__backdrop');
    refs.closeBtn = document.querySelector('.camera__details');
  } else if (e.target.classList.contains('monitoring')) {
    refs.backdrop = document.querySelector('.monitoring__backdrop');
    refs.closeBtn = document.querySelector('.monitoring__details');
  } else if (e.target.classList.contains('cleaning')) {
    refs.backdrop = document.querySelector('.cleaning__backdrop');
    refs.closeBtn = document.querySelector('.cleaning__details');
  } else if (e.target.classList.contains('hostess')) {
    refs.backdrop = document.querySelector('.hostess__backdrop');
    refs.closeBtn = document.querySelector('.hostess__details');
  } else {
    return;
  }

  refs.backdrop.classList.remove('is-hidden');
  document.addEventListener('keydown', onEscTap);
  refs.backdrop.addEventListener('click', onClickOutside);
  refs.closeBtn.addEventListener('click', onBtnClose);
  document.body.style.overflow = 'hidden';
}

function onEscTap(e) {
  if (e.key === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onEscTap);
    refs.backdrop.removeEventListener('click', onClickOutside);
    refs.closeBtn.removeEventListener('click', onBtnClose);
  }
}

function onClickOutside(e) {
  if (e.target.classList[2] === 'details__backdrop') {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onEscTap);
    refs.backdrop.removeEventListener('click', onClickOutside);
    refs.closeBtn.removeEventListener('click', onBtnClose);
  }
}

function onBtnClose(e) {
  refs.backdrop.classList.add('is-hidden');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onEscTap);
  refs.backdrop.removeEventListener('click', onClickOutside);
  refs.closeBtn.removeEventListener('click', onBtnClose);
}
