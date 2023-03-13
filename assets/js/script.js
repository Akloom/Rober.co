let hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
});

let bookmark = document.querySelector('.bookmark');
let navCollapse = document.querySelector('.header-nav__collapse');
bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});
