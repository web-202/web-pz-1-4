document.addEventListener("DOMContentLoaded", function() {
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const sideMenu = document.getElementById("sideMenu");

    openMenuBtn.addEventListener("click", function() {
        sideMenu.style.left = "0";
    });

    closeMenuBtn.addEventListener("click", function() {
        sideMenu.style.left = "-250px";
    });
});
