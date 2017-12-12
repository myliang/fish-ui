<template>
  <div :class="['fish switch', {'disabled': disabled}, {'checked': this.value}]" @click="clickHandler">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fish-switch',
  props: {
    value: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    clickHandler () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

