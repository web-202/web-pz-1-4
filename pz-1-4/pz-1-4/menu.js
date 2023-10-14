document.addEventListener("DOMContentLoaded", function() {
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const sideMenu = document.querySelector(".side_menu");
    const page = document.querySelector(".page");

    openMenuBtn.addEventListener("click", function() {
        sideMenu.classList.add("opened");
        page.classList.add("opened");
    });

    closeMenuBtn.addEventListener("click", function() {
        sideMenu.classList.remove("opened");
        page.classList.remove("opened");
    });
});
