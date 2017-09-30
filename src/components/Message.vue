<template>
  <div :class="['vui message', type]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vui-message',
    props: {
      type: { type: String, default: 'warning' }
    }
  }
</script>
