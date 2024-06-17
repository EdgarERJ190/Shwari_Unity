document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const switchToLoginFromForgot = document.getElementById("switchToLoginFromForgot");

    // Function to toggle forms
    function showLoginForm() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
    }

    function showSignupForm() {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        forgotPasswordForm.style.display = "none";
    }

    // Event listeners for form switching
    switchToSignup.addEventListener("click", function(e) {
        e.preventDefault();
        showSignupForm();
    });

    switchToLogin.addEventListener("click", function(e) {
        e.preventDefault();
        showLoginForm();
    });

    forgotPasswordLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "block";
    });

    switchToLoginFromForgot.addEventListener("click", function(e) {
        e.preventDefault();
        showLoginForm();
    });

    // Event listener for login form submission
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Handle login logic (e.g., validate credentials)
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Example validation (replace with your actual logic)
        if (username === "example" && password === "password") {
            // Redirect to patient dashboard
            window.location.href = "patientdash.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // Event listener for signup form submission
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Handle signup logic here
        alert("Signup form submitted");
    });

    // Event listener for forgot password form submission
    forgotPasswordForm.addEventListener("submit", function(e) {
        e.preventDefault();
        // Handle forgot password logic here
        alert("Forgot password form submitted");
    });

    // Initial view setup
    showLoginForm(); // Show login form initially
});
