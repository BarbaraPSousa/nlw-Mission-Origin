//DOM Document Object Model

/*função de fechar o menu ao clicar*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  //se tiver a class show tira, se não coloca
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*função de clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    /* maior que a altura do header*/
    header.classList.add('scroll') //adiciona
  } else {
    /* menor que a altura do header*/
    header.classList.remove('scroll') //remove
  }
})

/* Testimonials carousel slider swiper*/
const Swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mausewheel: true,
  Keyboard: true
})
/*ScrollReveal: mostra o elemento quando da scroll na pagina*/
const ScrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true;
})
