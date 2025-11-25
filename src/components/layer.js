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
  if (visible) {
    document.body.appendChild(content)
    setTimeout(() => {
      calcPosition(target, content, autoWidth)
    })
  } else {
    if (content && content.parentNode) {
      content.parentNode.removeChild(content)
    }
  }
}
