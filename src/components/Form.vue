<template>
  <form :class="['fish form', {'inline': this.inline}]">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'fish-form',
    props: {
      inline: { type: Boolean, default: false }
    }
  }
</script>
