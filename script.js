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