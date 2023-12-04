(function () {
    "use strict";

    // Function to show/hide password
    var showHide = document.querySelector('.show-hide');
    var passwordInput = document.querySelector('input[name="login[password]"]');
    var showHideSpan = document.querySelector('.show-hide span');

    showHide.style.display = 'block';
    showHideSpan.classList.add('show');

    showHideSpan.addEventListener('click', function () {
        if (showHideSpan.classList.contains('show')) {
            passwordInput.setAttribute('type', 'text');
            showHideSpan.classList.remove('show');
        } else {
            passwordInput.setAttribute('type', 'password');
            showHideSpan.classList.add('show');
        }
    }); 

    function login() {
        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");
    
        // Replace 'yourUsername' and 'yourPassword' with your actual username and password
        const validUsername = "sh@gmail.com";
        const validPassword = "123456789";
    
        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            window.location.href = "project.html"; // Redirect to the welcome page
        } else {
            errorMessage.textContent = "Invalid username or password";
        }
    }

    // Reset to password type on form submit
    var formButton = document.querySelector('form button[type="submit"]');
    formButton.addEventListener('click', function () {
        showHideSpan.textContent = 'Show';
        showHideSpan.classList.add('show');
        passwordInput.setAttribute('type', 'password');
    });

})();

function togglePasswordVisibility() {
    var passwordInput = document.querySelector('input[name="login[password]"]');
    var showHideIcon = document.querySelector('.show-hide i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showHideIcon.classList.remove('fa-eye');
        showHideIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        showHideIcon.classList.remove('fa-eye-slash');
        showHideIcon.classList.add('fa-eye');
    }
}

