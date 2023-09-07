const openButton = document.getElementById("open-sidebar");
const hideButton = document.querySelector(".toggle-sidebar");
const sidebarWindow = document.querySelector(".sidebar-window");

openButton.addEventListener("click", function () {
  sidebarWindow.style.display = "flex";
});

hideButton.addEventListener("click", function () {
  sidebarWindow.style.display = "none";
})




