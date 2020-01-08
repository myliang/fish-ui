<template>
  <div :class="['fish message', type, { 'attached': attached }, attached]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-message',
    props: {
      type: { type: String, default: '' },
      attached: { type: [Boolean, String] }
    }
  }
</script>
