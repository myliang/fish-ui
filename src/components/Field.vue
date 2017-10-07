<template>
  <div :class="['field', {'inline': this.inline }]" :style="styleObject">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script>
  const spanWidth = 4.16666
  
  export default {
    name: 'fish-field',
    props: {
      label: { type: String },
      span: { type: [String, Number], default: 0 },
      inline: { type: Boolean, default: false }
    },
    computed: {
      styleObject () {
        const { span } = this
        if (span === 0) return {}
        return {
          width: `${spanWidth * parseInt(span + '')}%`
        }
      }
    }
  }
</script>
