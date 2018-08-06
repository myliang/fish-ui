<template>
  <div :class="['fish message', type]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'fish-message',
    props: {
      type: { type: String, default: '' }
    }
  }
</script>
