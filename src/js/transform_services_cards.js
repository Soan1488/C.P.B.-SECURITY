const refs = {
  list: document.querySelector('.cards-list'),
  backdrop: '',
  closeBtn: '',
};

refs.list.addEventListener('click', onListClick);

function onListClick(e) {
  switch (e.target.getAttribute('data')) {
    case 'guard':
      refs.backdrop = document.querySelector('.guard__backdrop');
      refs.closeBtn = document.querySelector('[data="guardDetails"]');
      break;
    case 'camera':
      refs.backdrop = document.querySelector('.camera__backdrop');
      refs.closeBtn = document.querySelector('[data="cameraDetails"]');
      break;
    case 'monitoring':
      refs.backdrop = document.querySelector('.monitoring__backdrop');
      refs.closeBtn = document.querySelector('[data="monitoringDetails"]');
      break;
    case 'cleaning':
      refs.backdrop = document.querySelector('.cleaning__backdrop');
      refs.closeBtn = document.querySelector('[data="cleaningDetails"]');
      break;
    case 'hostess':
      refs.backdrop = document.querySelector('.hostess__backdrop');
      refs.closeBtn = document.querySelector('[data="hostessDetails"]');
      break;
    default:
      break;
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
