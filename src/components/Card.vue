<template>
  <div :class="[`fish card`, color, {'fluid': fluid, 'nopadding': nopadding}]">
    <div class="header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="content" :style="contentStyle" v-if="$slots.default">
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
      maxHeight: { type: String },
      minHeight: { type: String },
      color: { type: String, default: '' } // red, orange, yellow, olive, green, teal, blue, violet, purple, pink, brown, grey, dark, black
    },
    computed: {
      contentStyle () {
        const style = { overflow: 'auto' }
        if (this.maxHeight) {
          style['max-height'] = this.maxHeight
        }
        if (this.minHeight) {
          style['min-height'] = this.minHeight
        }
        return style
      }
    }
  }
</script>
