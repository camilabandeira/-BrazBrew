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

//  contact-us form thank you message

document.addEventListener('DOMContentLoaded', function() {
    let contactUsForm = document.getElementById('contact-us');
    if (contactUsForm) {
        contactUsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            this.style.display = 'none'; 
            
            let thankYouMessage = document.getElementById('thank-you-msg');
            if (thankYouMessage) {
                thankYouMessage.style.display = 'block'; 
            }
        });
    }
});


// newsletter-form

document.addEventListener('DOMContentLoaded', function() {
    let newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            let emailInput = document.querySelector('[name="email"]');
            let email = emailInput.value;

            showCustomAlert();
            
            console.log('Email for subscription:', email);

            emailInput.value = '';
        });
    }
});

function showCustomAlert() {
    document.getElementById("customAlert").style.display = "block";
}

function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
}
