<template>
  <div class="col" :style="styleObject">
    <slot></slot>
  </div>
</template>
<script>
  const spanWidth = 4.16666

  export default {
    name: 'fish-col',
    props: {
      span: { type: [String, Number], required: true }, // 1-24
      offset: { type: [String, Number], default: 0 }, // 1-24
      push: { type: [String, Number], default: 0 }, // 1-24
      pull: { type: [String, Number], default: 0 } // 1-24
    },
    computed: {
      styleObject () {
        const ret = {
          width: `${spanWidth * parseInt(this.span + '')}%`,
          marginLeft: `${spanWidth * parseInt(this.offset + '')}%`
        }
        if (this.push > 0) ret['left'] = `${spanWidth * parseInt(this.push + '')}%`
        if (this.pull > 0) ret['right'] = `${spanWidth * parseInt(this.pull + '')}%`
        return ret
      }
    }
  }
</script>
