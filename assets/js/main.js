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

// newsletter-form

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the traditional form submission.
    
    const emailInput = document.querySelector('[name="email"]');
    const email = emailInput.value;

    showCustomAlert();
    
    console.log('Email for subscription:', email);

    emailInput.value = '';
});

function showCustomAlert() {
    document.getElementById("customAlert").style.display = "block";
}

function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
}