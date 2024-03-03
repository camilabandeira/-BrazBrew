// responsive navbar menu
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');


hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open'); 
    hamburgerEl.classList.toggle('hamburger--open');
});

navEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open'); 
    hamburgerEl.classList.remove('hamburger--open');
});

// form thank you message

document.getElementById('contact-us-form').addEventListener('submit', function(e) {
    e.preventDefault();

    this.style.display = 'none';

    document.getElementById('thank-you-msg').style.display = 'block';
});