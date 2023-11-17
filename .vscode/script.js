
function toogleMode() {
  const html = document.documentElement
  html.classList.toggle(`light`)
  /*if(html.classList.contains(`light`)){
    html.classList.remove(`light`)
  }else{
    html.classList.add(`light`)
  }*/
  const img = document.querySelector("#perfile img")
  const alt = document.querySelector('prefile img')
  if (html.classList.contains('light')) {
    img.setAttribute('src', '../assets/avatar-light.png')
    alt.setAttribute('alt', 'foto de mayke de avatar')

  }else{
    img.setAttribute('src', '../assets/avatar.png')
    alt.setAttribute('alt', 'mayke de camisa preta')
  }
}