const btnClose = document.getElementById("sidebar-close")
const sidebar = document.getElementById("sidebar")
const btnOpen = document.getElementById("sidebar-open")
const main = document.getElementById("main")
btnClose.addEventListener("click", (e) => {
  sidebar.style.left = "-100vw"
  btnOpen.style.display = "block"
  main.style.display = "block"

}, false);

btnOpen.addEventListener("click", () => {
  sidebar.style.left = "0px"
  main.style.display = "none"
  btnOpen.style.display = "none"
}, false)
