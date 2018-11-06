/* global fetch:false marked:false openpgp:false */

window.renderHTMLComponent = async function (component, options, text) {
  var eid = typeof options === 'string' ? options : options.eid
  if (component.endsWith('.aes')) {
    var plaintext = await openpgp.decrypt({
        message: await openpgp.message.readArmored(text),
        passwords: [options.password],
        format: 'ascii'
    })
    return renderHTMLComponent(component.slice(0, component.length -4), options, plaintext.data)
  } else if (component.endsWith('.md')) {
    document.getElementById(eid).innerHTML = marked(text)
  } else if (component.endsWith('.html')) {
    if (options && options.popup) {
      var w = window.open()
      if (!w) alert('Please enable popups.')
      w.document.open()
      w.document.write(text)
      w.document.close()
    } else {
      document.getElementById(eid).innerHTML = text
    }
  }
}

window.loadHTMLComponent = async function (component, options) {
  return fetch(component).then(async response => {
    return renderHTMLComponent(component, options, await response.text())
  }).catch(e => {
    if (options && options.hasOwnProperty(error)) return options.error(e)
    else console.error(e) // eslint-disable-line
  })
}
