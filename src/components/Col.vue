<template>
  <div :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>
<script>
  const spanWidth = 4.16666

  export default {
    name: 'fish-col',
    props: {
      type: { type: String, default: 'percent' }, // fixed, auto, percent
      width: { type: Number, default: 200 },
      span: { type: [String, Number], default: 8 }, // 1-24
      offset: { type: [String, Number], default: 0 }, // 1-24
      push: { type: [String, Number], default: 0 }, // 1-24
      pull: { type: [String, Number], default: 0 } // 1-24
    },
    computed: {
      classObject () {
        return [
          'col',
          `width-${this.type}`
        ]
      },
      styleObject () {
        if (this.type === 'percent') {
          const ret = {
            width: `${spanWidth * parseInt(this.span + '')}%`,
            marginLeft: `${spanWidth * parseInt(this.offset + '')}%`
          }
          if (this.push > 0) ret['left'] = `${spanWidth * parseInt(this.push + '')}%`
          if (this.pull > 0) ret['right'] = `${spanWidth * parseInt(this.pull + '')}%`
          return ret
        } else if (this.type === 'fixed') {
          return {
            width: `${this.width}px`
          }
        }
        return {}
      }
    }
  }
</script>
