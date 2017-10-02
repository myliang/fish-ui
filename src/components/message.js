// const messageRootDiv = document.createElement('div')
// messageRootDiv.setAttribute('class', 'ui notice')
// document.body.appendChild(messageRootDiv)
let createElement = (tag, className = null, html = null, onclick = null) => {
  let ele = document.createElement(tag)
  if (className !== null) ele.setAttribute('class', className)
  if (html !== null) ele.innerHTML = html
  if (onclick !== null) ele.onclick = onclick
  return ele
}

let _messageRoot = null
let _noticeRoot = {}
let getRoot = (className) => {
  let _root = createElement('div', className)
  document.body.appendChild(_root)
  return _root
}

const message = (color, html, fadeTime, position = 'top center') => {
  // console.log('color=', color, text, fadeTime)
  if (_messageRoot === null) _messageRoot = getRoot(`fish ${position} notices`)
  let div = createElement('div', ``, `<div class="fish notice ${color} move-in">${html}</div>`)
  _messageRoot.appendChild(div)
  setTimeout(() => {
    _messageRoot.removeChild(div)
  }, fadeTime)
}

export default {
  info: (text, fadeTime = 3000) => {
    message('info', `${text}`, fadeTime)
  },
  success: (text, fadeTime = 3000) => {
    message('success', `${text}</div>`, fadeTime)
  },
  error: (text, fadeTime = 3000) => {
    message('error', `${text}`, fadeTime)
  },
  warning: (text, fadeTime = 3000) => {
    message('warning', `${text}`, fadeTime)
  },
  tip: (title, content, position = 'top right') => {
    if (_noticeRoot[position] === undefined) _noticeRoot[position] = getRoot(`fish ${position} notices`)
    // console.log(_noticeRoot[position])
    let div = createElement('div', 'fish notice fade-in', `
                                                   <i class="fa fa-times close"></i>
                                                   <div class="header">${title}</div>
                                                   <div class="content">${content}</div>
                                                 `)
    div.querySelector('.close').onclick = () => {
      _noticeRoot[position].removeChild(div)
    }
    _noticeRoot[position].appendChild(div)
  }
}
