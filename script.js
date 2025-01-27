// Toggle theme button
const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Add your form submission logic here
});