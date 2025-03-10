function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.querySelector('body');
    dropdownMenu.classList.toggle('show');
    burgerMenu.classList.toggle('change');
    body.classList.toggle('no-scroll');
}

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.buy');
    const isLogged = localStorage.getItem('isLogged');

    if (isLogged === 'true') {
        loginButton.textContent = 'Se déconnecter';
        loginButton.addEventListener('click', () => {
            localStorage.removeItem('isLogged');
            window.location.reload();
        });
    } else {
        loginButton.textContent = 'Se connecter';
        loginButton.addEventListener('click', () => {
            window.location.href = 'connect.html';
        });
    }

    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.style.top = '-100px'; 
        } else {
            // Scroll up
            navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});