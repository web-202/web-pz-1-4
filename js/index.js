document.addEventListener('DOMContentLoaded', () => {
  const openSettings = document.getElementById('settings__open')
  const closeSettings = document.getElementById('settings__close')
  const settings = document.getElementById('settings')

  openSettings.addEventListener('click', (e) => {
    e.preventDefault()
    settings.classList.add('active')
  })

  closeSettings.addEventListener('click', () => {
    settings.classList.remove('active')
  })
})
