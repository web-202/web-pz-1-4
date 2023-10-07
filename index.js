function showMenu() {
  const menu = document.getElementById('menu')
  if (menu.style.display === 'none') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }

  const main = document.getElementById('main')
  if (main.style.display === 'none') {
    main.style.display = 'block'
  } else {
    main.style.display = 'none'
  }

  const header = document.getElementById('header')
  if (header.style.display === 'none') {
    header.style.display = 'flex'
  } else {
    header.style.display = 'none'
  }
}
