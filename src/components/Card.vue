<template>
  <div :class="[`fish card`, color, {'fluid': fluid, 'nopadding': nopadding}]">
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="content" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fish-card',
    props: {
      fluid: { type: Boolean, default: false },
      nopadding: { type: Boolean, default: false },
      color: { type: String, default: '' } // red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, dark, black
    }
  }
</script>
