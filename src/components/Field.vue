<template>
  <div :class="['field', {'inline': inline, 'disabled': disabled, 'required': required }]" :style="styleObject">
    <label v-if="label" class="label" :style="inline ? {'width': `${labelWidth}`, 'text-align': labelAlign} : {}">{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script>
  const spanWidth = 4.16666
  
  export default {
    name: 'fish-field',
    props: {
      label: { type: String },
      labelWidth: { type: String, default: 'auto' },
      labelAlign: { type: String, default: 'right' },
      span: { type: [String, Number], default: 0 },
      disabled: { type: Boolean, default: false },
      required: { type: Boolean, default: false },
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
