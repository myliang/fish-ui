function calcPosition (target, content, autoWidth) {
  const { clientHeight, scrollTop } = document.documentElement
  const elRect = target.getBoundingClientRect()
  const { height } = content.getBoundingClientRect()
  content.style.left = `${elRect.left + 1}px`
  if (autoWidth) content.style.width = `${elRect.width - 2}px`
  // console.log('clientHeight:', clientHeight, scrollTop, elRect)
  const top = elRect.top + scrollTop
  if (clientHeight / 2 < top) {
    content.style.top = `${top - height - 2}px`
  } else {
    content.style.top = `${top + elRect.height + 2}px`
  }
}

export function toBody (visible, target, content, autoWidth) {
  const hide = () => {
    if (target.__clickOutside) {
      document.removeEventListener('click', target.__clickOutside)
      delete target.__clickOutside
    }
    if (content && content.parentNode) {
      content.parentNode.removeChild(content)
    }
  }

  if (!target.__clickOutside) {
    const documentHandler = (e) => {
      if (!target.contains(e.target) && !content.contains(e.target)) {
        hide()
      }
    }
    target.__clickOutside = documentHandler
    document.addEventListener('click', documentHandler)
  }
  if (visible) {
    content.style.top = '-10000px'
    content.style.left = '-10000px'
    calcPosition(target, content, autoWidth)
    setTimeout(() => {
      document.body.appendChild(content)
    })
  } else {
    hide()
  }
}
