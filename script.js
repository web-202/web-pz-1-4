document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burgerIcon');
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('closeButton');

    burgerIcon.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }
});