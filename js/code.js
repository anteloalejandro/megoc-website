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

const themeBtn = document.getElementsByClassName('tema-btn')

for (b of themeBtn) {
  b.addEventListener('click', ev => {
    ev.preventDefault()
    document.documentElement.classList.toggle('light')
  })
}

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

const closeBtn = document.getElementById('close')
closeBtn.addEventListener('click', ev => {
  ev.target.parentElement.style.display = 'none'
})

const imgs = document.querySelectorAll('img')
for (i of imgs) {
  i.draggable = false
}

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

const footer = document.querySelector('footer')
footer.querySelector('#close').onclick = () => {
  localStorage.setItem('cookies-ack', true)
  footer.style.display = 'none'
}
if (localStorage.getItem('cookies-ack'))
  footer.style.display = 'none'

document.querySelectorAll("main>section:not(:first-of-type)")
  .forEach(e => {
    let animation = 'slideInLeft'
    if (e.id == 'qui-som')
      animation = 'fadeIn'
    e.classList.add('wow', animation)
    e.dataset.wowDuration = "500ms"
  })

new WOW({live: false, offset: 200}).init()

