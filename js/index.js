const burgerMenu = document.getElementById('burger-menu')
const main = document.getElementById('main')

const openModalMenu  = () => {
    burgerMenu.style.display = "block";
    main.style.filter = "blur(4px)"
}

const closeModalMenu = () => {
    burgerMenu.style.display = "none";
    main.style.filter = "none"
}