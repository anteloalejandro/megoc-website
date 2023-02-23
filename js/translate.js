let translations = {}
fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    translations = data
    translations.val = {}
    getDefault(translations.esp)
  })


function getDefault(item, sel = '') {
  if (!(item instanceof Object)) {
    translations.val[sel] = document.querySelector(sel).textContent
    return
  }
  Object.keys(item).forEach(k => {
    getDefault(item[k], sel+' '+k)
  })
}

function apply(item, sel = '') {
  if (!(item instanceof Object)) {
    document.querySelectorAll(sel)
      .forEach(e => {
        e.textContent = item
      })
    return
  }

  Object.keys(item).forEach(k => {
    apply(item[k], sel+' '+k)
  })
}

function translate(lang) {
    apply(translations[lang])
}
