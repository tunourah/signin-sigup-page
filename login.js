// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Reset any previous error messages
        emailError.textContent = '';
        passwordError.textContent = '';

        // Validate email
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required';
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format';
        }

        // Validate password
        if (!passwordInput.value.trim()) {
            passwordError.textContent = 'Password is required';
        }

        // If no errors, submit the form
        if (!emailError.textContent && !passwordError.textContent) {
            // Here you can submit the form data to the server for authentication
            // For demonstration purposes, we're just logging the form data
            console.log('Email:', emailInput.value);
            console.log('Password:', passwordInput.value);
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
