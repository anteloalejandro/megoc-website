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
    translations.val[sel] = document.querySelector(sel).innerHTML
    return
  }
  Object.keys(item).forEach(k => {
    getDefault(item[k], sel+' '+k)
  })
}

function apply(item, sel = '') {
  if (!(item instanceof Object)) {
    // console.table({selector: sel, text: item})
    document.querySelectorAll(sel)
      .forEach(e => {
        e.innerHTML = item
      })
    return
  }

  Object.keys(item).forEach(k => {
    apply(item[k], sel+' '+k)
  })
}

function translate(lang) {
  var tmp = setInterval(() => {
    if (!translations.val) return

    apply(translations[lang])
    clearInterval(tmp)
  }, 1)
}
