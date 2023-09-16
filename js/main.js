const openBurgerMenu = () => {
    const burgerIcon = document.querySelector('.burger-click')
    const menu = document.querySelector('.burger-menu');

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        menu.style.display = 'inline'
    });
}

const closeBurgerMenu = () => {
    const burgerIcon = document.querySelector('.close-btn')
    const menu = document.querySelector('.burger-menu');

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('active');
        menu.style.display = 'none'
    });
}