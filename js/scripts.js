document.addEventListener('DOMContentLoaded', function() {
  const clickableBlock = document.getElementById('clickableBlock');

  clickableBlock.addEventListener('click', function() {
    window.location.href = 'item.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const openMenuDiv = document.getElementById('openSideBar');
  const sideMenu = document.getElementById('sideBar');
  const mainContent = document.getElementById('mainContent');

  openMenuDiv.addEventListener('click', function() {
    if (sideMenu.classList.contains('open')) {
      sideMenu.classList.replace('open', 'closed');
      mainContent.classList.replace('cardsNone', 'cards');
    } else {
      sideMenu.classList.replace('closed', 'open');
      mainContent.classList.replace('cards', 'cardsNone');
    }
  });
});

