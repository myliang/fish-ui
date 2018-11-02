let createElement = (tag, className = null, html = null, onclick = null) => {
  let ele = document.createElement(tag)
  if (className !== null) ele.setAttribute('class', className)
  if (html !== null) ele.innerHTML = html
  if (onclick !== null) ele.onclick = onclick
  return ele
}

// 计算绝对的偏移量（相对于html）
let absoluteOffset = (el) => {
  return el.getBoundingClientRect()
}

let setPositionStyle = (el) => {
  let client = {w: document.body.scrollWidth, h: document.body.scrollHeight}
  let offset = absoluteOffset(el)
  // console.log('offset: ', offset, el)
  let arrowPosition = ''
  let style = 'display: block;'

  console.log(client.h, ':::', offset.top)

  if (client.h / 2 > offset.top) {
    arrowPosition += 'bottom'
    style += `top: ${offset.top + el.offsetHeight}px;`
  } else {
    arrowPosition += 'top'
    style += `bottom: -${offset.top}px; top: auto;`
  }

  if (client.w / 2 > offset.left) {
    arrowPosition += ' left'
    style += `left: ${offset.left}px; right: auto;`
  } else {
    arrowPosition += ' right'
    style += `right: ${client.w - offset.left - el.offsetWidth}px;`
  }

  return {arrowPosition, style}
}

const targetQueue = []

let createPopup = (event, html, width = null, appendChildrenCallback) => {
  // console.log('event: ', event)
  let el = event.target
  targetQueue.push(el)
  if (el['_popup'] !== undefined) {
    return this
  }

  let root = document.createElement('div')
  // root.style = 'display: block; visibility: hidden;'
  root.innerHTML = html

  let rootWrapper = el['_popup'] = createElement('div')
  rootWrapper.style = `position: absolute; top: 0; left: 0; width:100%;`
  rootWrapper.append(root)
  document.body.appendChild(rootWrapper)
  if (appendChildrenCallback !== undefined) {
    appendChildrenCallback.call(this, root, el)
  }

  let {arrowPosition, style} = setPositionStyle(el)
  console.log(arrowPosition, ':::', style)
  root.setAttribute('class', 'fish popup ' + arrowPosition)
  root.style = style
  if (width !== null) root.style.width = `${width}`
  root.onclick = (e) => {
    e.stopPropagation()
  }
  addAwayListener(el)
  return root
}

let awayFunc = (event) => {
  let el = targetQueue.shift()
  if (event.target !== el['_popup']) {
    removePopup(el)
  }
}

let removePopup = (el) => {
  document.body.removeChild(el['_popup'])
  delete el['_popup']
  document.removeEventListener('click', awayFunc, false)
}

let addAwayListener = (el) => {
  setTimeout(() => {
    document.addEventListener('click', awayFunc, false)
  }, 0)
}

export default {
  confirm: (event, html, okFunc, okText = 'Yes', cancelText = 'No') => {
    html = `<div class="content"><i class="fa fa-exclamation-circle"></i>${html}</div>`
    createPopup(event, html, null, (root, el) => {
      let children = createElement('div', 'footer', '')
      children.appendChild(createElement('div', 'fish small button', cancelText, (e) => { removePopup(el); e.stopPropagation() }))
      children.appendChild(createElement('div', 'fish small primary button', okText, (e) => { okFunc && okFunc(); removePopup(el); e.stopPropagation() }))
      root.appendChild(children)
    })
  }
}
