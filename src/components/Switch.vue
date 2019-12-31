<template>
  <div :class="['fish switch', {'disabled': disabled}, {'checked': yesOrNo[0] === this.value}]" @click="clickHandler">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'fish-switch',
  props: {
    value: { type: [Boolean, Number, String], default: false },
    disabled: { type: Boolean, default: false },
    yesOrNo: { type: Array, default: () => [true, false] }
  },
  methods: {
    clickHandler () {
      const v = this.yesOrNo[0] === this.value ? this.yesOrNo[1] : this.yesOrNo[0]
      this.$emit('input', v)
      this.$emit('change', v)
    }
  }
}
</script>

