<template>
  <div :class="classObject" :style="{width: `${width}${mode === 'horizontal' ? '%' : 'px'}`}">
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'fish-steps',
    props: {
      size: { type: String },
      width: { type: [String, Number], default: 100 },
      mode: { type: String, default: 'horizontal' } // horizontal, vertical
    },
    mounted () {
      this.$children.forEach((ele, index) => {
        ele.index = index + 1
      })
    },
    computed: {
      classObject () {
        return [ 'fish steps', this.size, this.mode ]
      }
    }
  }
</script>
