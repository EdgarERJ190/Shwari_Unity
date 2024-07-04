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
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        forgotPasswordForm.classList.add("hidden");
    }

    function showSignupForm() {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        forgotPasswordForm.classList.add("hidden");
    }

    function showForgotPasswordForm() {
        loginForm.classList.add("hidden");
        signupForm.classList.add("hidden");
        forgotPasswordForm.classList.remove("hidden");
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
        showForgotPasswordForm();
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
            // Redirect to caregiver dashboard
            window.location.href = "caregiverdash.html";
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
