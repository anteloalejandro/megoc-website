var currentTranslation = 0

/**@params {Object} sel*/
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
var json;
function translate(lang) {
fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    apply(data[lang])
  })
}

translate("esp")
