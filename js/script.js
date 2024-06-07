const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('toggle-menu');
const closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2000',
    reset: true
})

// Scroll Home
sr.reveal('.home_title', {})
sr.reveal('.home_scroll', {delay: 200})
sr.reveal('.home_img', {origin: 'right', delay: 400})

// Scroll About
sr.reveal('.about_img', {delay: 500})
sr.reveal('.about_subtitle', {delay: 300})
sr.reveal('.about_profession', {delay: 400})
sr.reveal('.about_text', {delay: 500})

// Scroll Skills
sr.reveal('skills_subtitle', {})
sr.reveal('skills_name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('skills_subtitle', {delay: 400})

// Scroll Services
sr.reveal('.services_s-icon', {interval: 400})

// Scroll Portfolio
sr.reveal('.portfolio_img', {interval: 200})

// Scroll Contact
sr.reveal('contact_subtitle', {})
sr.reveal('contact_text', {interval: 200})
sr.reveal('contact_input', {delay: 400})
sr.reveal('contact_button', {delay: 600})

// Date Function 
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').innerText = currentYear;
});

// Contact form submition

function sendEmail(){
    var Full_Name = document.getElementById('full-name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');

    var messageBody = "Full Name " + Full_Name +
    "<br> Phone " + phone +
    "<br> Email " + email +
    "<br> Message " + msg;
    Email.send({
        SecureToken : "9171bb25-e160-43d6-a9eb-578ead2df8fb",
        To : 'thulaninyombolo@gmail.com',
        From : "tebohonyombolo@hotmail.com",
        Subject : "New Contact Form Enquiry",
        Body : messageBody
    }).then(
      message => {
        if(message == 'OK'){
            Swal.fire({
                title: "Successful",
                text: "You clicked the button!",
                icon: "success"
              });
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
      } 
    );
}


