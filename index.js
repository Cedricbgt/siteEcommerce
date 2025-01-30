function toggleMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const burgerMenu = document.querySelector('.burger-menu');
    const body = document.querySelector('body');
    dropdownMenu.classList.toggle('show');
    burgerMenu.classList.toggle('change');
    body.classList.toggle('no-scroll');
}