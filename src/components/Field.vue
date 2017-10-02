<template>
  <div :class="['field', span, {'inline': this.inline }]">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-field',
    props: {
      label: { type: String },
      span: { type: String },
      inline: { type: Boolean, default: false }
    }
  }
</script>
