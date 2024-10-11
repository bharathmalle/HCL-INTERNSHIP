document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Placeholder for authentication logic
    if (username === "admin" && password === "password") {
        // Redirect to employee management system
        window.location.href = "index.html"; // Change to your main app page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
