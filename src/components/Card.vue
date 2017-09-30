<template>
  <div class="vui card">
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
    name: 'vui-card'
  }
</script>
