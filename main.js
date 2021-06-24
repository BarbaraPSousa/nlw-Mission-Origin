//DOM Document Object Model

/*função de fechar o mennu ao clicar*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*função de clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const links of links) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
