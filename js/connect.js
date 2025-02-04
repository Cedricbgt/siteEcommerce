const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

document.getElementById('loginFormElement').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');

    if (!loginEmail.value) {
        loginEmailError.textContent = 'Email est requis';
        loginEmailError.style.display = 'block';
        valid = false;
    } else {
        loginEmailError.style.display = 'none';
    }

    if (!loginPassword.value) {
        loginPasswordError.textContent = 'Mot de passe est requis';
        loginPasswordError.style.display = 'block';
        valid = false;
    } else {
        loginPasswordError.style.display = 'none';
    }

    if (valid) {
        const storedUser = JSON.parse(localStorage.getItem(loginEmail.value));
        if (storedUser && storedUser.password === loginPassword.value) {
            alert('Connexion réussie');
            localStorage.setItem('isLogged', 'true'); // Stocker l'état de connexion
            window.location.href = 'index.html'; // Rediriger vers la page d'accueil ou une autre page
        } else {
            loginPasswordError.textContent = 'Email ou mot de passe incorrect';
            loginPasswordError.style.display = 'block';
        }
    }
});

document.getElementById('registerFormElement').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
    const registerConfirmPassword = document.getElementById('registerConfirmPassword');
    const registerEmailError = document.getElementById('registerEmailError');
    const registerPasswordError = document.getElementById('registerPasswordError');
    const registerConfirmPasswordError = document.getElementById('registerConfirmPasswordError');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/; // Regex du mot de passe (minuscule, majuscule, chiffre, caractère spécial, 7 caractères minimum)

    if (!registerEmail.value) {
        registerEmailError.textContent = 'Email est requis';
        registerEmailError.style.display = 'block';
        valid = false;
    } else {
        registerEmailError.style.display = 'none';
    }

    if (!registerPassword.value) {
        registerPasswordError.textContent = 'Mot de passe est requis';
        registerPasswordError.style.display = 'block';
        valid = false;
    } else if (!passwordRegex.test(registerPassword.value)) {
        registerPasswordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial et faire plus de 6 caractères';
        registerPasswordError.style.display = 'block';
        valid = false;
    } else {
        registerPasswordError.style.display = 'none';
    }

    if (!registerConfirmPassword.value) {
        registerConfirmPasswordError.textContent = 'Confirmer le mot de passe est requis';
        registerConfirmPasswordError.style.display = 'block';
        valid = false;
    } else if (registerPassword.value !== registerConfirmPassword.value) {
        registerConfirmPasswordError.textContent = 'Les mots de passe ne correspondent pas';
        registerConfirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        registerConfirmPasswordError.style.display = 'none';
    }

    if (valid) {
        const user = {
            email: registerEmail.value,
            password: registerPassword.value
        };
        localStorage.setItem(registerEmail.value, JSON.stringify(user));
        alert('Inscription réussie');
        // Rediriger vers l'onglet de connexion
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    }
});