document.querySelectorAll('[data-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('is-active');
  });
});
