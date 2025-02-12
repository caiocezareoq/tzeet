const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const emailError = document.getElementById('emailError');

function validateForm() {
    const emailValid = emailInput.value.includes('@') && emailInput.value.includes('.');
    const passwordValid = passwordInput.value.length > 0;

    if (emailInput.value.length > 0) {
        emailInput.classList.toggle('valid', emailValid);
        emailInput.classList.toggle('invalid', !emailValid);
    } else {
        emailInput.classList.remove('valid', 'invalid');
    }

    if (passwordInput.value.length > 0) {
        passwordInput.classList.toggle('valid', passwordValid);
        passwordInput.classList.toggle('invalid', !passwordValid);
    } else {
        passwordInput.classList.remove('valid', 'invalid');
    }

    if (emailValid && passwordValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }

    if (emailInput.value.length > 0 && !emailValid) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);