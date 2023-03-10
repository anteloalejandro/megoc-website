// CABECERA Y NAV
const nav = document.querySelector('#nav-mobile')
const menu = document.querySelector('#h-menu')
const header = menu.parentElement
const toggleNav = ev => {
  nav.classList.toggle('expanded')

  if (header.classList.contains('dropshadow')) {
    header.classList.remove('dropshadow')
    nav.classList.add('dropshadow')
  }
  else {
    var tmp = setTimeout(() => {
      header.classList.add('dropshadow')
      nav.classList.remove('dropshadow')
      clearTimeout(tmp)
    }, 500) // Tiene que cambiar con los MS de la animación del nav
  }
}
menu.addEventListener('click', toggleNav)

for (el of nav.querySelector('ul').children) {
  const li = el.querySelector('a')
  if (li)
    li.addEventListener('click', toggleNav)
}

// BOTÓN DE TEMA
const themeBtn = document.getElementsByClassName('tema-btn')
for (b of themeBtn) {
  b.onclick = ev => {
    ev.preventDefault()
    localStorage.setItem('lightTheme', !(localStorage.getItem('lightTheme') === 'true'))
    document.documentElement.classList.toggle('light')
  }
}
if (localStorage.getItem('lightTheme') === 'true')
  document.documentElement.classList.add('light')

// GALERÍA
const galerias = document.getElementsByClassName('galeria')
for (g of galerias) {
  g.addEventListener('click', ev => {
    const classes = ev.target.classList
    const imgs = g.querySelector('.imgs')
    if (classes.contains('left-arrow'))
      imgs.scrollBy(-imgs.clientWidth, 0)
    else if (classes.contains('right-arrow'))
      imgs.scrollBy(imgs.clientWidth, 0)
    else
      return
  })
}

// FOOTER
const footer = document.querySelector('footer')
const closeBtn = footer.querySelector('#close')
closeBtn.onclick = () => {
  localStorage.setItem('cookies-ack', true)
  footer.style.display = 'none'
}
if (localStorage.getItem('cookies-ack'))
  footer.style.display = 'none'


// IMÁGENES
const imgs = document.querySelectorAll('img')
for (i of imgs) {
  i.draggable = false
}

// LENGUAJE
const langBtns = document.getElementsByClassName("idioma")
if (localStorage.getItem('lang')) {
  translate(localStorage.getItem('lang'))
  for (const b of langBtns)
    b.value = localStorage.getItem('lang')
}
for (const b of langBtns) {
  b.onchange = ev => {
    for (const e of langBtns)
      e.value = b.value
    localStorage.setItem('lang', b.value)
    translate(b.value)
  }
}

// FORMULARIO
const inscBtn = document.getElementById('button-insc')
inscBtn.onclick = ev => {
  ev.preventDefault()
  document.body.classList.add('show-form')
  document.body.onclick = ev => {

    if ([...document.querySelectorAll("form, form *")].includes(ev.target) || ev.target === inscBtn)
      return

    document.body.classList.remove('show-form')
    document.body.onclick = () => {}
  }
}

// ANIMACIONES
document.querySelectorAll("main>section:not(:first-of-type)")
  .forEach(e => {
    let animation = 'slideInLeft'
    if (e.id == 'qui-som')
      animation = 'fadeIn'
    e.classList.add('wow', animation)
    e.dataset.wowDuration = "500ms"
  })

new WOW({live: false, offset: 200}).init()

