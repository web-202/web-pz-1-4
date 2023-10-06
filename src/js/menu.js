const openMenuBtn = document.querySelector(".header__btn > .header__menu-icon");
const closeMenuBtn = document.querySelector(".menu-container__close-icon");
const menuContainer = document.querySelector(".menu-container");

openMenuBtn.addEventListener("click", () => menuContainer.classList.add("menu-container_open"));
closeMenuBtn.addEventListener("click", () => menuContainer.classList.remove("menu-container_open"));
