const hambiBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.navigation');

hambiBtn.addEventListener('click', function (e) {
  nav.classList.add('open');
  hambiBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function (e) {
  nav.classList.remove('open');
  hambiBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
