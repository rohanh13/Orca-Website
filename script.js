let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const currentScroll = window.scrollY;

  if (window.innerWidth <= 600) { // mobile only
    if (currentScroll > lastScrollTop) {
      // scrolling down
      navbar.style.top = '-200px';
    } else {
      // scrolling up
      navbar.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  } else {
    // Always show on desktop
    navbar.style.top = '0';
  }
});
  
document.querySelector('h1').addEventListener('click', function() {
  location.reload();
});

document.querySelector('h2').addEventListener('click', function() {
  document.querySelector('#para4').scrollIntoView({
    behavior: 'smooth'
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn-who').addEventListener('click', function() {
    document.querySelector('#para5').scrollIntoView({
      behavior: 'smooth'
    });
  });
});