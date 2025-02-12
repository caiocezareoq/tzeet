document.addEventListener('DOMContentLoaded', function () {
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const yearSelect = document.getElementById('year');
    const submitButton = document.getElementById('submitButton');
    const closeButton = document.querySelector('.closeButton');
    const signupForm = document.querySelector('.signup-form');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
    function populateDays() {
        daySelect.innerHTML = '<option value="">Dia</option>';
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearSelect.value);

        if (!month || !year) return;

        let daysInMonth = new Date(year, month, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }


    function validateForm() {
        const emailValid = emailInput.value.includes('@') && emailInput.value.includes('.');
        const passwordValid = passwordInput.value.length >= 6;
        const confirmPasswordValid = passwordInput.value === confirmPasswordInput.value;
    
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
    
        if (confirmPasswordInput.value.length > 0) {
            confirmPasswordInput.classList.toggle('valid', confirmPasswordValid);
            confirmPasswordInput.classList.toggle('invalid', !confirmPasswordValid);
        } else {
            confirmPasswordInput.classList.remove('valid', 'invalid');
        }

        if (emailInput.value.length > 0 && !emailValid) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    
        if (passwordInput.value.length > 0 && !passwordValid) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    
        if (confirmPasswordInput.value.length > 0 && !confirmPasswordValid) {
            confirmPasswordError.style.display = 'block';
        } else {
            confirmPasswordError.style.display = 'none';
        }
    
        if (emailValid && passwordValid && confirmPasswordValid) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
    

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!submitButton.disabled) {
            alert('Conta criada com sucesso!');
        }
    });
    populateDays();
});
