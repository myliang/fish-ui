<template>
  <form :class="['vui form', {'inline': this.inline}]">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'vui-form',
    props: {
      inline: { type: Boolean, default: false }
    }
  }
</script>
