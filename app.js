const hambiBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.navigation');

document.getElementById('div').style.pointerEvents = 'none';

hambiBtn.addEventListener('click', function (e) {
  nav.classList.add('open');
  hambiBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  document.body.style.overflowY = 'hidden';
  document.body.style.pointerEvents = 'none';
});

closeBtn.addEventListener('click', function (e) {
  nav.classList.remove('open');
  hambiBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  document.body.style.overflowY = 'scroll';
  document.body.style.pointerEvents = 'auto';
});
