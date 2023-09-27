let isClosed = true;
const sideMenu = document.getElementById('sideMenu');
const main = document.getElementById('main');

const toBlog = () => {
  window.location.href = 'blog.html';
}
const toHome = () => {
  window.location.href = 'index.html';
}
const doSideMenu = () => {
  if (isClosed) {
    sideMenu.className = 'sideMenu'
    main.style.display = 'none'
    isClosed = false;
  }else {
    sideMenu.className = 'sideMenu-close'
    main.style.display = 'flex'
    isClosed = true;
  }
}
