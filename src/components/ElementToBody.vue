<template>
  <div style="position: absolute; z-index: 100;" v-show="show">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'fish-element-to-body',
  props: {
    show: { type: Boolean, default: false },
    target: { type: HTMLElement }
  },
  watch: {
    show (v) {
      if (v) {
        this.resize()
        document.body.appendChild(this.$el)
      } else {
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el)
        }
      }
    }
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
    resize () {
      const { clientHeight } = document.body
      this.$nextTick(() => {
        const { top, left, width, height } = this.target.getBoundingClientRect()
        const { scrollLeft, scrollTop } = document.documentElement
        const { style } = this.$el
        style.width = `${width}px`
        if (top > clientHeight / 2) {
          style.top = `${top + scrollTop - this.$el.getBoundingClientRect().height - 2}px`
        } else {
          style.top = `${top + scrollTop + height + 2}px`
        }
        style.left = `${left + scrollLeft}px`
      })
    }
  }
}
</script>