// listen to the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission
    // send the form using email.js
    emailjs.sendForm('service_wcfiaot', 'template_99xl9rc', this)
    .then(() =>{
        console.log('SUCCESS!');
        alert('Your message has been sent successfully!');
        document.getElementById('contact-form').reset(); // reset the form
    }, (error) => {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again later.');
    });
});