<template>
  <div :class="['fish row', align, justify]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-row',
    props: {
      gutter: { type: [String, Number], default: 0 },
      align: { type: [String, Number], default: 'top' },
      justify: { type: [String, Number], default: 'start' }
    },
    mounted () {
      // $children顺序有点问题。。
      this.$children.forEach((col, index) => {
        if (this.gutter > 0) {
          if (index < this.$children.length - 1) col.$el.style.paddingRight = this.gutter + 'em'
          col.$el.style.paddingBottom = this.gutter + 'em'
        }
      })
    }
  }
</script>
