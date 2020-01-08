<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fish-segment',
  props: {
    attached: { type: [Boolean, String] },
    floated: { type: String },
    aligned: { type: String },
    color: { type: String },
    basic: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    placeholder: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    classObject () {
      return [
        'fish segment',
        { 'basic': this.basic },
        { 'loading': this.loading },
        { 'placeholder': this.placeholder },
        { 'vertical': this.vertical },
        { 'disabled': this.disabled },
        this.color,
        { 'attached': this.attached },
        this.attached,
        { 'floated': this.floated },
        this.floated,
        { 'aligned': this.aligned },
        this.aligned
      ]
    }
  }
}
</script>