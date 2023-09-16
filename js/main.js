function openCloseNavMenu() {
  const navMenuDiv = document.getElementById('nav-menu')
  navMenuDiv.style.display = navMenuDiv.style.display === 'none' ? 'block' : 'none'

  const mainTag = document.getElementById('main')
  mainTag.style.display = navMenuDiv.style.display === 'none' ? 'block' : 'none'

  const headerTag = document.getElementById('header')
  headerTag.style.display = navMenuDiv.style.display === 'none' ? 'block' : 'none'
}

function openEvent() {
  window.open('event.html')
}
