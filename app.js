const hambiBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.navigation');
const container = document.querySelector('.container');

hambiBtn.addEventListener('click', function (e) {
  nav.classList.add('open');
  hambiBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  bodyScrollLock.disableBodyScroll(document.body);
});

closeBtn.addEventListener('click', function (e) {
  nav.classList.remove('open');
  hambiBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  bodyScrollLock.enableBodyScroll(document.body);
});
