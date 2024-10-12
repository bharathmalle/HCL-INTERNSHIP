// JavaScript function to handle login validation
function validateLogin(event) {
    // Prevent form from submitting automatically
    event.preventDefault();

    // Get values from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace this logic with your actual validation)
    if (username === 'admin' && password === '1234') {
        // Redirect to main page upon successful login
        window.location.href = 'index.html';
    } else {
        // Show error if the credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
}
