// Show / Hide Password
function togglePassword(id, icon) {

    let input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Registration Form Validation
document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Name Validation
    if (name.length < 3) {
        alert("Full Name must be at least 3 characters.");
        return;
    }

    // Mobile Validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    // Password Length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save Data in Local Storage
    let user = {
        name: name,
        email: email,
        mobile: mobile,
        password: password
    };

    localStorage.setItem("freshbiteUser", JSON.stringify(user));

    alert("Registration Successful!");

    // Redirect to Login Page
    window.location.href = "login.html";
});